import { Component } from '@angular/core';

@Component({
  selector: 'dv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public year = new Date().getFullYear();
}
