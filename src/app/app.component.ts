import { Component,HostListener,Input,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { GameService} from './game.service';

 
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {

@Input() gameData:any;

  constructor(private routers:Router,private service:GameService ){
  }
 ngOnInit() {

    this.routers.navigate([''])
  }

}