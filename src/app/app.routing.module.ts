import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartComponent } from './views/start/start.component';
import { GameComponent } from './views/game/game.component';
import { TimerComponent } from './views/timer/timer.component';



@NgModule({
  declarations: [ 
    StartComponent,
    GameComponent
    //  ,TwoComponent,QuestionComponent
    ,TimerComponent
     //, CatalogViewComponent
  ],
  imports: [
    RouterModule.forRoot([
       { path: '', component: StartComponent },
      { path: 'start', component: StartComponent },
      { path: 'game', component: GameComponent },
      // { path: 'two', component: TwoComponent },
      // { path: 'question', component: QuestionComponent },
       { path: 'timer', component: TimerComponent },
      { path: '**', redirectTo: 'start' }
    ]), FormsModule,BrowserAnimationsModule,ReactiveFormsModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}

