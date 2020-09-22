import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CroquetaComponent } from './croqueta/croqueta.component';
import { MilkaComponent } from './milka/milka.component';
import { BodyComponent } from './principales/body/body.component';


const routes: Routes = [
  {
    path: 'home',
    component: BodyComponent
  },
  {
    path: 'milka',
    component: MilkaComponent
  },
  {
    path: 'croqueta',
    component: CroquetaComponent
  },
  {
    path: '**',
    component: BodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
