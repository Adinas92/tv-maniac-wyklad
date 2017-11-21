import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'tm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() owner = 'Me';
  @Output() timePass = new EventEmitter<number>();

  constructor() {
    setInterval(() => this.timePass.emit(+new Date()), 20034);
  }

  ngOnInit() {
  }

  handleClick() {
    console.log('CLICK');
  }

}
