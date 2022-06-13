import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HeaderCoreFeaturesComponent } from './components/header-core-features/header-core-features.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'core', component: HomeFeaturesComponent}
]

@NgModule({
  declarations: [
    HomeFeaturesComponent,
    HeaderCoreFeaturesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule,
    HomeFeaturesComponent
  ]
})
export class CoreLibFeaturesModule { }
