import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmokComponent } from './omok.component';

describe('OmokComponent', () => {
  let component: OmokComponent;
  let fixture: ComponentFixture<OmokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
