import { Component, OnInit } from '@angular/core';
import { Subjects } from 'db-data';
import { Topic } from 'src/app/models/Topic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // subjects: Subject[] = [];

  topics = Subjects

  // firstCard = Subjects[0];
  // subTwo = Subjects[1];
  // subThree = Subjects[2];
  // subFour = Subjects[3];
  // subFive = Subjects[4];
  // subSix = Subjects[5];
  // subSeven = Subjects[6];
  // lastCard = Subjects[7];

  constructor() {
    // console.log(this.firstCard)
    // console.log(this.topics)
  }

  ngOnInit(): void {
  }
  // getSubjects() {

  //   this.subjects = Subjects[0];
  //   console.log(this.subjects)
  // }


  onTopicSelect(subject: Topic) {
    console.log('cardClick: Bubled to Card!', subject)
  }

}
