import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import '../../../../db-data';
import { Topic } from '../../models/Topic';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  topic!: Topic;

  @Input()
  cardIndex!: number;

  @Output()
  topicSelect = new EventEmitter<Topic>();
  // card-title:string = Subjects[0].title;

  // imgUrl: string = 'assets/logo_ang_bllue-bg.jpg';

  // scoreList = [100,46,27,74,150];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  getStarted() {
    // this.scoreList
    console.log('event:', 'clicked'
    // , Math.min(...this.scoreList)
    )
    this.topicSelect.emit(this.topic)
  }

}
