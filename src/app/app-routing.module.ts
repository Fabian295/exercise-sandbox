import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { HomeComponent } from './components/home/home.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HomeFeaturesComponent } from './core-lib-features/components/home-features/home-features.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'rxjs', component: RxjsComponent},
  {path: 'concepts', component: ConceptsComponent},
  {path: 'core', component: HomeFeaturesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
