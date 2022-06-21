import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/Topic';
// import { Subjects } from '../../../../db-data';
import { TopicService } from 'src/app/services/topic.service';

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

  topics:Topic[] = [];


  // topics = Subjects;

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topics = this.topicService.getTopics();
    console.log(this.topics)
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  goToTop(): void {
    // console.log(ev)
    window.scroll(0, 0);
  }

  // getCards() {
  //   this.topics = Subjects
  //   console.log(cards)
  // }

  levels:{} = {
    'basic': true,
    'advanced': false
  }
  isBasic!: boolean;
  // getCardTopicLevel(): any {
  // //  this.topics = this.topicService.getTopics();
  // this.topicService.getTopics().forEach(topic => {
  //  if (topic.level==='basic'){
  //   this.isBasic = true;
  //  this.levels = {
  //     'basic': true,
  //     'advanced': false
  //   }
  //   console.log({...this.levels})
  //   return {...this.levels};
  //  }
  //  return this.levels = {
  //     'basic': false,
  //     'advanced': true
  //   }
  //  })
  //  this.levels = {...this.levels};
  //   console.log(this.levels)
  //   return this.levels;
  // }

}
