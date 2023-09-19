import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { LoadingComponent } from './loading/loading.component';

// pipes
import { FormatPricePipe } from './pipes/format-price.pipe';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ButtonComponent,
    InputComponent,
    FormatPricePipe,
    LoadingComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LayoutComponent,
    ButtonComponent,
    InputComponent,
    FormatPricePipe
  ]
})
export class SharedModule { }
