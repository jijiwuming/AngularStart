import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { MainService } from './main.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
];

@NgModule({
  declarations: [MainComponent],
  providers: [MainService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
