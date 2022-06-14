import { Component, OnInit } from '@angular/core';
import { Subjects } from 'db-data';
import { Subject } from 'src/app/interfaces/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // subjects: Subject[] = [];

  firstCard = Subjects[0];
  subTwo = Subjects[1];
  subThree = Subjects[2];
  subFour = Subjects[3];
  subFive = Subjects[4];
  subSix = Subjects[5];
  subSeven = Subjects[6];
  lastCard = Subjects[7];

  constructor() {
    console.log(this.firstCard)
  }

  ngOnInit(): void {
  }
  // getSubjects() {

  //   this.subjects = Subjects[0];
  //   console.log(this.subjects)
  // }

}
