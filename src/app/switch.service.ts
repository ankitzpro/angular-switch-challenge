import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
@Output() scoreData:EventEmitter<any>= new EventEmitter(); 
  level=0;

anstext='';

intervalId: number = 0;
seconds: number = 5;
score=0;

  clearTimer() { clearInterval(this.intervalId); }
}