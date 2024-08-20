import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'robot-msg',
  templateUrl: './robot-msg.component.html',
  styleUrls: ['./robot-msg.component.scss'],
})
export class RbtComponent implements OnInit {
  
  @Input() message: any;

  @Output() eventOptionSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendOption(opcion: string) {
    this.eventOptionSelected.emit(opcion);
    setTimeout(() => {
      this.message.options = [];
    }, 500);
  }

  getClasses() {
    if (this.message.autor == 'bot') {
      return 'd-flex flex-row justify-content-start chat-bot';
    }
    return 'd-flex flex-row justify-content-end chat-user';
  }
}