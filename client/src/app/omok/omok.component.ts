import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-omok',
  templateUrl: './omok.component.html',
  styleUrls: ['./omok.component.css']
})

export class OmokComponent implements OnInit {

   private currentTime=7;
   intervalId;
   chk = 0;

   source = timer(1000,1000);
   turn = 0;
   old_turn = 0;
   products: any = [];
   private sub : Subscription;
   c1 : Result = new Result()
   c2 : Session = new Session()

   constructor(private http:HttpClient) {
     this.turn = 0;
     this.c1.result = "playing...";
     this.http.get("./getsession/").subscribe(c=> this.c2.session = c.toString());
   }

   ngOnInit() {
   }

   game_start(){
        if(this.chk==0){
                this.showDigitalClock();
                this.chk +=1;
        }
        else{
                alert("NO");
        }

        this.sub = this.source.subscribe((t)=> this.onTimeOut());
   }

  showDigitalClock(){
        this.currentTime -= 1;
        this.intervalId= setTimeout(()=>{
          this.showDigitalClock();
        },1000);
   }

  onTimeOut(){
    this.resultData().subscribe(m=>this.c1.result = m.toString());
    this.getAllData().subscribe(data =>
      {
        this.products = data;
        this.old_turn = this.turn;
        this.turn = this.products.length;
        if(this.currentTime > 0 && this.old_turn < this.turn)
        {
          this.currentTime = 7;
        }
        if(this.currentTime < 0 && this.old_turn == this.turn)
        {
          alert("Game Over")
          this.sub.unsubscribe();
          this.currentTime = 0;
          clearTimeout(this.intervalId);
        }
        if(this.c1.result!="playing...")
        {
          alert(this.c1.result)
          this.sub.unsubscribe();
          clearTimeout(this.intervalId);
        }
      });

    var canvas : any = document.getElementById('board');
    if(canvas.getContext)
    {
      var count = 0;
      for(let entry of this.products)
      {
        count++;
        var color = entry.color;
        var coor_X1 = entry.x1;
        var coor_Y1 = entry.y1;
        var coor_X2 = entry.x2;
        var coor_Y2 = entry.y2;
        var ctx = canvas.getContext('2d');

        var x1 = this.convX(coor_X1);
        var x2 = this.convX(coor_X2);

        var y1 = this.convY(coor_Y1);
        var y2 = this.convY(coor_Y2);

        var line_color = "black";
        if (this.turn == count)
          line_color = "red";

        ctx.beginPath();
        ctx.arc(x1, y1, 19, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = line_color;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x2, y2, 19, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.stroke();

      }
    }
  }

  convY(oriY)
  {
    return (19 - oriY) * 40 + 24;
  }

  convX(oriX)
  {   var x;
    switch(oriX)
    {
      case 'A': x = 0*40; break;
      case 'B': x = 1*40 ; break ;
      case 'C': x = 2*40 ; break ;
      case 'D': x = 3*40 ; break ;
      case 'E': x = 4*40 ; break ;
      case 'F': x = 5*40 ; break ;
      case 'G': x = 6*40 ; break ;
      case 'H': x = 7*40 ; break ;
      case 'I': x = 8*40 ; break ;
      case 'J': x = 9*40 ; break ;
      case 'K': x = 10*40 ; break ;
      case 'L': x = 11*40 ; break ;
      case 'M': x = 12*40 ; break ;
      case 'N': x = 13*40 ; break ;
      case 'O': x = 14*40 ; break ;
      case 'P': x = 15*40 ; break ;
      case 'Q': x = 16*40 ; break ;
      case 'R': x = 17*40 ; break ;
      case 'S': x = 18*40 ; break ;
    }
    return x + 24;
  }


  resultData()
  {
    return this.http.get("./resultdata/"+this.c2.session)
  }

  getAllData()
  {
    return this.http
      .get("./api/sessions/"+this.c2.session+"/stones")
  }
}
export class Result{
  result : String;
}

export class Session{
  session : String;
}

