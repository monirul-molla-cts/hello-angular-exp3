import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import the home component and bio component
import {HomeComponent} from './home/home.component';
import {BioComponent} from './bio/bio.component';

//Then added the routes path
const routes: Routes =[
  {path:'', component: HomeComponent},
  {path:'bio', component: BioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
