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
  ansarr=[];
  arr2=['triangle','square','circle','cross'];
  ngOnInit() {
 console.log('Hello');
    this.arr=this.shuffle(this.arr);
    console.log(this.arr);
    this.arr2=this.shuffle(this.arr2);
    console.log(this.arr2);
    

    for(var i=0;i<this.arr.length;i++){ 
      for(var j=0;j<this.arr2.length;j++){
        
        if(this.arr[i]==this.arr2[j]){
          this.ansarr.push(j+1);
        }
      }
    }
    console.log(this.ansarr);
    console.log(this.arr);
    console.log(this.arr2);
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