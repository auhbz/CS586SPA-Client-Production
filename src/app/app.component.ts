import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comp586ProjectClient';

  // @ts-ignore
  constructor(http: HttpClient, public auth: AuthService) {
  }

}

