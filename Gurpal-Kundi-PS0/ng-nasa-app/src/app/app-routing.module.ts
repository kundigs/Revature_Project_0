import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { PODComponent } from './pod/pod.component';
import { TopicSearchComponent } from './topic-search/topic-search.component';

const routes: Routes = [
  {
    path: 'topic-search',
    component: TopicSearchComponent
  },
  {
    path: 'location-search',
    component: LocationSearchComponent
  },
  {
    path: 'POD',
    component: PODComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
