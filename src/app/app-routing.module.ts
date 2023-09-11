import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { signInComponent } from './sign-in/sign.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'signIn', component: AppComponent }, 
  { path: 'signUp', component: signInComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }