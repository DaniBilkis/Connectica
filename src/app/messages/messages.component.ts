import { Component, OnInit } from '@angular/core';
import { MESSAGES }          from '../_shared/data-messages';
import { Message }           from '../_shared/interface-message';
import { SelectionModel }    from '@angular/cdk/collections';

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
  selection = new SelectionModel<Message>(false, []);

  constructor() { }

  ngOnInit() {
  }

  selectedMessage( row: Message ) {
    this.selectedRow = row;
    this.selection.clear();
    this.selection.select(row);
  }

}
