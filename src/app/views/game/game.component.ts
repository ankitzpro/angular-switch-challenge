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
    this.arrCreation();
    
  }

  arrCreation(){
 console.log('Hello2');
    var i=0;
    var _this=this;
    function arrCreate(){
      var ind = Math.floor(Math.random() * 3)+0;
      _this.arr[i]=_this.shapes[ind];
    console.log(_this.arr);
      if(i<4){
        i++;
        arrCreate();
      }
    }
    arrCreate();
  }

}