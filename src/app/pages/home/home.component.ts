import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  public cvlist=[]

  ngOnInit(): void {
    this.http.get<any[]>("https://us-central1-ramazanmutlu-222b5.cloudfunctions.net/api/v1/cv/").subscribe(data=>this.cvlist=data);
  }

}
