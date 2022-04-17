import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  public login() {
    this.http
      .post(
        'https://us-central1-ramazanmutlu-222b5.cloudfunctions.net/api/v1/auth/login',
        {
          username: this.username,
          password: this.password,
        }
      )
      .subscribe((d) => console.log(d));
  }
}
