import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Agile";
   cl(){
    const myserv=new myservice();
    myserv.onclickbtn(this.title);
    
  }


}
