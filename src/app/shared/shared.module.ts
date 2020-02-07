import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceClickDirectiveDirective } from './directives/debounce-click-directive.directive';

const components = [];
const pipes = [];
const directives = [
  DebounceClickDirectiveDirective
];

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
