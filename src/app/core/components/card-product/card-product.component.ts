import { Component, Input } from '@angular/core';

@Component({
  selector: 'dv-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() name?: string;
  @Input() price?: number;
  @Input() providerName?: string;
  @Input() id?: number;
  @Input() image?: string;
}
