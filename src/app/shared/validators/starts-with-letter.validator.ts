import {AbstractControl} from '@angular/forms';

export function startsWithLetterValidator(upperCase = true) {
  return (control: AbstractControl) => {
    const condition = upperCase ? /^([a-zA-Z])/ : /^([a-z])/;
    return condition.test(control.value)
      ? null
      : {
        startsWithLetter: true
      };
  };
}
