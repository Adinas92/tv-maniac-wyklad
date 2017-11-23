import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
