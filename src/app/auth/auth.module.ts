import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules create
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

// pages
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
