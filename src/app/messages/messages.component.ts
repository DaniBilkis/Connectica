import { Component, OnInit } from '@angular/core';
import { MESSAGES } from '../_shared/data-messages';
import { Message } from '../_shared/interface-message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  displayedColumns = ['partner', 'messageNumber', 'inOutMessageType', 'typeOfMessage', 'date'];
  displayedDetailedColumns = ['position', 'article', 'description', 'quantity', 'price', 'total'];
  dataSource = MESSAGES;
  selectedRow: Message;

  constructor() { }

  ngOnInit() {
  }

  selectedMessage( row: Message ) {
    this.selectedRow = row;
  }

}
