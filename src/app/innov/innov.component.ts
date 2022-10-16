import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-innov',
  templateUrl: './innov.component.html',
  styleUrls: ['./innov.component.css']
})
export class InnovComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Innovative";
  cl(){
      const myserv=new myservice();
      myserv.onclickbtn(this.title);
  }

}
