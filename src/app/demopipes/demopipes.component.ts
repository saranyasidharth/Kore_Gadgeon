import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="ben";
  today=Date();
  user=
  {
    id:100,
    name:"saranya",
    DOB:'01-06-2000',
    salary:9000000

  }

}
