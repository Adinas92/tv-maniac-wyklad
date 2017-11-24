import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Directive({
  selector: '[tmSubmitIfValid]',
})
export class SubmitIfValidDirective {
  @Input('tmSubmitIfValid') form: FormGroup; // tslint:disable-line:no-input-rename
  @Output() valid = new EventEmitter<void>();

  @HostListener('click')
  handleClick() {
    this.markAsDirty();
    this.emitIfValid();
  }

  private markAsDirty() {
    for (const controlName in this.form.controls) {
      if (this.form.controls.hasOwnProperty(controlName)) {
        this.form.controls[controlName].markAsDirty();
      }
    }
  }

  private emitIfValid() {
    if (this.form.valid) {
      this.valid.emit();
    }
  }
}
