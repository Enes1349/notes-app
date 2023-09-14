import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss']
})
export class signInComponent {
  title = 'notes-app';
  email: string = '';
  password: string = '';
  
  constructor(private authService: AuthService) {
  } 
  ngOnInit() { }

  onSignUp() {
    const email = this.email;
    const password = this.password;
    this.authService.SignUp(email, password)
  }
}
