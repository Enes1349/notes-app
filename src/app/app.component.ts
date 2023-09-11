import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notes-app';
  email: string = '';
  password: string = '';
  authService: any;

  constructor(private auth: AuthService) {}
  ngOnInit() { }
}
