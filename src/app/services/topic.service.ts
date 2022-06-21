import { Injectable } from '@angular/core';
import { Subjects } from 'db-data';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() {
    // console.log(Subjects)
   }

  getTopics() {
    return Subjects
  }

}
