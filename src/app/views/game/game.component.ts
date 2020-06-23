import { Component} from '@angular/core';
import { SwitchService} from '../../switch.service';


import { Router} from '@angular/router';


@Component({
  selector: 'GameComponent',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.css' ],
})

export class GameComponent  {
  constructor(private service:SwitchService, private routers:Router ) { }


  eventText = '';
  level=this.service.level+1;

  arr=['triangle','square','circle','cross'];
  //ansarr=[];
  arr2=['triangle','square','circle','cross'];
  ansar1=[];
  ansar2=[];
  ansar3=[];
  randpos:number;
  ngOnInit() {
    this.arr=this.shuffle(this.arr);
    this.arr2=this.shuffle(this.arr2);
    

    for(var i=0;i<this.arr.length;i++){ 
      for(var j=0;j<this.arr2.length;j++){
        
        if(this.arr[i]==this.arr2[j]){
          this.ansar1.push(j+1);
          this.ansar2.push(j+1);
          this.ansar3.push(j+1);
        }
      }
    }

   console.log(this.ansar1);
   console.log(this.ansar2);
   console.log(this.ansar3);

this.randpos = Math.floor(Math.random() * 3)+1;

   console.log(this.randpos);
switch(this.randpos){
 case 1:
 {
   this.ansar2=this.shuffle(this.ansar2);
   this.ansar3=this.shuffle(this.ansar3);
   break;
 }
 case 2:
 {
   this.ansar1=this.shuffle(this.ansar1);
   this.ansar3=this.shuffle(this.ansar3);}
   break;
 case 3:
 {
   this.ansar2=this.shuffle(this.ansar2);
   this.ansar1=this.shuffle(this.ansar1);
   break;
   }
   }
   console.log(this.ansar1);
   console.log(this.ansar2);
   console.log(this.ansar3);
}
  

   shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

}