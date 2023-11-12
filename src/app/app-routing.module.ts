import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'character',
        component: CharactersComponent,
      },
      {
        path: 'episode',
        component: CharactersComponent,
      },
      {
        path: 'location',
        component: CharactersComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
