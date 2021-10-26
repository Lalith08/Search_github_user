import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css'],
})
export class ViewsComponent implements OnInit {
  userName: string = '';
  respones: any;
  errorResponse: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  search() {
    this.http
      .get('https://api.github.com/users/' + this.userName)
      .subscribe((res) => {
        this.respones = res;
      });
  }
}
