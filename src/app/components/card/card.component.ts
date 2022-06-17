import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import '../../../../db-data';
import { Subject } from '../../interfaces/Subject';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  topic!: Subject;

  @Input()
  cardIndex!: number;

  @Output()
  topicSelect = new EventEmitter<Subject>();
  // card-title:string = Subjects[0].title;

  // imgUrl: string = 'assets/logo_ang_bllue-bg.jpg';

  // subjects: Subject[] = [] ;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  getStarted() {
    console.log('event:', 'clicked')
    this.topicSelect.emit(this.topic)
  }

}
