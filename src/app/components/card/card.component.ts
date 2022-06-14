import { Component, OnInit, Input } from '@angular/core';
import { Subjects } from 'db-data';
import { Subject } from 'src/app/interfaces/Subject';
// import { Subject } from 'src/app/interfaces/Subject';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  subject!: Subject;
  // card-title:string = Subjects[0].title;

  // imgUrl: string = 'assets/logo_ang_bllue-bg.jpg';

  // subjects: Subject[] = [] ;
  constructor() { }

  ngOnInit(): void {
  }


  getStarted() {
    console.log('event:', 'clicked')
  }

}
