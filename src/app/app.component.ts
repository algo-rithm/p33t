import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'p33t-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'p33 . Tee . coh';

  constructor(private authService: AuthService ) {}

  ngOnInit() {
    this.authService.initAuthListener();
  }
}
