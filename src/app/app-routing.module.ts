import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { signInComponent } from './sign-in/signIn.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './notes/note.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'signIn', component: signInComponent }, 
  { path: 'notes', component: NoteComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }