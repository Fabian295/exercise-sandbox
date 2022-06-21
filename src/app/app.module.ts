import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { CardComponent } from './components/card/card.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { TopicService } from './services/topic.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ConceptsComponent,
    CardComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
