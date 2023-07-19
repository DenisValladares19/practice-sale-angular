import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormatPricePipe } from './pipes/format-price.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ButtonComponent,
    InputComponent,
    FormatPricePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    ButtonComponent,
    InputComponent,
    FormatPricePipe
  ]
})
export class SharedModule { }
