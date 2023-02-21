import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ColorpatchesComponent } from './colorpatches/colorpatches.component';

const routes: Routes = [
  {path : '', redirectTo: 'colorpatches', pathMatch: 'full'}, 
  { path: 'colorpatches', component: ColorpatchesComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
