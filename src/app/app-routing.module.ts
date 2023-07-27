import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import("./core/core.module").then(m => m.CoreModule)},
  {path: "auth", loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
