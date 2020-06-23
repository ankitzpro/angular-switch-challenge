import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
@Output() scoreData:EventEmitter<any>= new EventEmitter(); 
  level=0;

anstext='';

score=0;
rangestart=2;
rangeend=25;
noofdigits=6;
secperlevel=2000;
secperdigit=300;
textMaker(text:string){
  this.anstext=text;

  if(this.level==9){
  this.anstext='Your Final Score :'+this.score;
  }
}

levelUpdate(){
  this.level++;
  if(this.level>=0 && this.level<3){
    this.rangestart=2;
    this.rangeend=25;
    this.noofdigits=6;
    this.secperdigit=300;
    this.secperlevel=2000;

  }
  else if(this.level>=3 && this.level<6){
 this.rangestart=20;
    this.rangeend=50;
    this.noofdigits=6;
    this.secperdigit=300;
    this.secperlevel=2000;
  }
  else if(this.level>=6 && this.level<8){
     this.rangestart=50;
    this.rangeend=100;
    this.noofdigits=7;
    this.secperdigit=200;
    this.secperlevel=1500;
  }
  else{
 this.rangestart=100;
    this.rangeend=999;
    this.noofdigits=7;
    this.secperdigit=200;
    this.secperlevel=1500;
  }
}
}