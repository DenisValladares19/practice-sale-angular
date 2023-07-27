import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'dv-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public loading: boolean = false;

  constructor (private loadingService: LoadingService) {
    this.loadingService.loading.subscribe(res => {
      this.loading = res;
    })
  }
}
