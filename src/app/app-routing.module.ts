import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { TemplateComponent } from './pages/template/template.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { LocationComponent } from './pages/location/location.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        component: CharactersComponent,
      },
      {
        path: 'character',
        component: CharactersComponent,
      },
      {
        path: 'episode',
        component: EpisodeComponent,
      },
      {
        path: 'location',
        component: LocationComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
