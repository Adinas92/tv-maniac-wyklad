import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'tm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact = {
    email: '',
    message: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  send() {
    console.log('SEND!');
  }

  showErrors(fieldRef: FormControl): boolean {
    return fieldRef.dirty && fieldRef.invalid;
  }

}
