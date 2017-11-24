import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {startsWithLetterValidator} from './starts-with-letter.validator';

@Directive({
  selector: '[tmStartsWithLetter]',
  providers: [{provide: NG_VALIDATORS, useExisting: StartsWithLetterDirective, multi: true}]
})
export class StartsWithLetterDirective implements Validator {
  @Input('tmStartsWithLetter') upperCase = false; // tslint:disable-line:no-input-rename

  validate(control: AbstractControl): ValidationErrors {
    return startsWithLetterValidator(this.upperCase)(control);
  }

  constructor() {
  }

}
