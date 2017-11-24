import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitIfValidDirective } from './submit-if-valid.directive';
import { StartsWithLetterDirective } from './validators/starts-with-letter.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubmitIfValidDirective, StartsWithLetterDirective],
  exports: [SubmitIfValidDirective, StartsWithLetterDirective],
})
export class SharedModule { }
