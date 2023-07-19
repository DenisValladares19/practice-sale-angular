import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './page/product/product.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CoreRoutingModule } from './core-routing.module';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductComponent,
    CardProductComponent,
    ProductDetailComponent,
    QuantityComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
