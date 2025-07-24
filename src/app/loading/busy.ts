import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class Busy {
  busyRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) {}

  colors: string[] = [
    'rgb(5, 70, 255)',
    'rgb(133, 20, 245)',
    'rgb(246, 55, 227)',
    'rgb(241, 22, 83)'
  ];  

  busy() {
    let clr = 'rgb(133, 20, 245)';
    if (!(this.colors === undefined || this.colors.length <= 0)) {
      let ind: number = Math.floor(Math.random() * this.colors.length);
      clr = this.colors[ind];
    } // random color

    this.busyRequestCount++;
    this.spinnerService;
    this.spinnerService.show(undefined,
      {
        type: 'ball-clip-rotate-pulse',
        bdColor: 'rgba'+clr.substring(3, clr.length - 1)+', 0.2)', // rgba verzija
        color: clr,
        size: 'default',
        fullScreen: true
      }
    )
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }

}
