import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MYT';
  routes = [
    { linkname: 'Login', url: 'login'},
    { linkname: 'Sign up', url: 'signup'},
  ]
}
