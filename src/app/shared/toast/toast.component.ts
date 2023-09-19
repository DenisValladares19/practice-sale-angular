import { Component } from '@angular/core';

@Component({
  selector: 'dv-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  public show: boolean = false;

  constructor() {
  }
}
