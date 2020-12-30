import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ HttpClient ]
})
export class AppComponent implements OnInit {
  data = {};
  agendas = [];
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get('https://4s6zwr22a0.execute-api.us-east-2.amazonaws.com/default/AgendaScraper')
      .subscribe(res => {
        this.data = (JSON.parse(res['body']))
      for (let item in this.data) {
        this.agendas.push(this.data[item]);
      }
    })
  }

}
