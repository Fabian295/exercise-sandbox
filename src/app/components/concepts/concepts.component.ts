import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {

  data = {
    title: 'Angular Core Concepts',
    logoAngular: 'assets/logo_ang.jpeg'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

}
