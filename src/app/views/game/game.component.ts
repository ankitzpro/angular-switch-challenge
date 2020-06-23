import { Component} from '@angular/core';
import { SwitchService} from '../../switch.service';


import { Router} from '@angular/router';


@Component({
  selector: 'GameComponent',
  templateUrl: './game.component.html'
})

export class GameComponent  {
  constructor(private service:SwitchService, private routers:Router ) { }


  eventText = '';
  level=this.service.level+1;

  arr=[];
  ansarr=[];
  arr2=[];
  shapes=['triangle','square','circle','plus'];
  ngOnInit() {
 console.log('Hello');
 this.arr=this.shapes;
 this.arr2=this.shapes;
    this.arr=this.shuffle(this.arr);
    console.log(this.arr);
    this.arr2=this.shuffle(this.arr2);
    console.log(this.arr2);
    

    for(var i=0;i<this.arr.length;i++){ 
      for(var j=0;j<this.arr2.length;j++){
      console.log('shape'+this.arr2[j]);
        
        if(this.arr[i]==this.arr2[j]){
          this.ansarr.push(j+1);
        }
      }
    }
    console.log(this.ansarr);
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