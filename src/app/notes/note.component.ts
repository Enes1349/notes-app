import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  title = 'notes-app';
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}
  ngOnInit() { }

  addNote() {

  }

  logOut() {
    this.auth.SignOut();
  }

  deleteNote() {

  }

  editNote() {

  }
}
