import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})

export class BattleComponent implements OnInit {

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


   constructor(private http:HttpClient, route: ActivatedRoute) {
     this.turn = 0;
     this.c1.result = "playing...";
     this.c2.session = route.snapshot.params['id'];
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
    this.getAllData().subscribe(data => {
        this.products = data;
        this.old_turn = this.turn;
        this.turn = this.products.length;
        if(this.currentTime > 0 && this.old_turn < this.turn){
                this.currentTime = 7;
        }
        if(this.currentTime < 0 && this.old_turn == this.turn){
                alert("Game Over")
                this.sub.unsubscribe();
                this.currentTime = 0;
                clearTimeout(this.intervalId);
        }
       if(this.c1.result!="playing..."){
            alert(this.c1.result)
            this.sub.unsubscribe();
            clearTimeout(this.intervalId);
       }

    });


        var canvas : any = document.getElementById('board');
        if(canvas.getContext){
          for(let entry of this.products){
                var color = entry.color;
                var coor_X1 = entry.x1;
                var coor_Y1 = entry.y1;
                var coor_X2 = entry.x2;
                var coor_Y2 = entry.y2;
                var ctx = canvas.getContext('2d');

                var y1;
                var y2;

                switch(coor_X1){
                        case 'A': y1 = 0*40; break;
                        case 'B': y1 = 1*40 ; break ;
                        case 'C': y1 = 2*40 ; break ;
                        case 'D': y1 = 3*40 ; break ;
                        case 'E': y1 = 4*40 ; break ;
                        case 'F': y1 = 5*40 ; break ;
                        case 'G': y1 = 6*40 ; break ;
                        case 'H': y1 = 7*40 ; break ;
                        case 'I': y1 = 8*40 ; break ;
                        case 'J': y1 = 9*40 ; break ;
                        case 'K': y1 = 10*40 ; break ;
                        case 'L': y1 = 11*40 ; break ;
                        case 'M': y1 = 12*40 ; break ;
                        case 'N': y1 = 13*40 ; break ;
                        case 'O': y1 = 14*40 ; break ;
                        case 'P': y1 = 15*40 ; break ;
                        case 'Q': y1 = 16*40 ; break ;
                        case 'R': y1 = 17*40 ; break ;
                        case 'S': y1 = 18*40 ; break ;
                }


		switch(coor_X2){
            case 'A': y2 = 0*40 ; break ;
            case 'B': y2 = 1*40 ; break ;
            case 'C': y2 = 2*40 ; break ;
            case 'D': y2 = 3*40 ; break ;
            case 'E': y2 = 4*40 ; break ;
            case 'F': y2 = 5*40 ; break ;
            case 'G': y2 = 6*40 ; break ;
            case 'H': y2 = 7*40 ; break ;
            case 'I': y2 = 8*40 ; break ;
            case 'J': y2 = 9*40 ; break ;
            case 'K': y2 = 10*40 ; break ;
            case 'L': y2 = 11*40 ; break ;
            case 'M': y2 = 12*40 ; break ;
            case 'N': y2 = 13*40 ; break ;
            case 'O': y2 = 14*40 ; break ;
            case 'P': y2 = 15*40 ; break ;
            case 'Q': y2 = 16*40 ; break ;
            case 'R': y2 = 17*40 ; break ;
            case 'S': y2 = 18*40 ; break ;
        }

        var x1 = (coor_Y1 - 1) * 40;
           var x2 = (coor_Y2 - 1) * 40;

           ctx.beginPath();
           ctx.arc(x1+24, y1+24, 20, 0, 2 * Math.PI, false);
           ctx.fillStyle = color;
           ctx.fill();
           ctx.lineWidth = 1;
           ctx.strokeSytle = "black";
           ctx.stroke();

           ctx.beginPath();
           ctx.arc(x2+24, y2+24, 20, 0, 2 * Math.PI, false);
           ctx.fill();
           ctx.lineWidth = 1;
           ctx.stroke();

        }
        }
}

resultData()
{
  return this.http.get("./resultdata/"+this.c2.session+"/")
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

