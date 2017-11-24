import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitIfValidDirective } from './submit-if-valid.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubmitIfValidDirective],
  exports: [SubmitIfValidDirective],
})
export class SharedModule { }
