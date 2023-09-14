import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = 'notes-app';
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}
  ngOnInit() { }
  
  login() {
    const email = this.email;
    const password = this.password;
    this.auth.SignIn(email, password);
    this.email = '';
    this.password = '';
  }
}
