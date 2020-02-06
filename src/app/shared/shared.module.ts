import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [];
const pipes = [];
const directives = [];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
    ...pipes,
    ...directives
  ]
})
export class SharedModule { }
