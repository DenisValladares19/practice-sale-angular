import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loading: Subject<boolean> = new Subject();

  constructor() {
    this.loading.next(false);
  }

  public show () {
    this.loading.next(true);
  }

  public hidden () {
    this.loading.next(false);
  }
}
