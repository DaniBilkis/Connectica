import { Component, OnInit } from '@angular/core';
// import { MESSAGES }          from '../_shared/data-messages';
import { Message }           from '../_shared/interface-message';
import { SelectionModel }    from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router }                     from '@angular/router';
import { MessageOrderResponseComponent } from './message-order-response/message-order-response.component';
import { DataService }       from '../_services/data.service';
import { DataMessages }      from '../_shared/data-messages';
import { DataMessage }       from "../_shared/data-message";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  displayedColumns = ['partner', 'messageNumber', 'inOutMessageType', 'typeOfMessage', 'date'];
  displayedDetailedColumns = ['position', 'article', 'description', 'quantity', 'price', 'total'];
  // dataSource = MESSAGES;
  dataSource: DataMessages;
  selectedRow: DataMessage;
  selection = new SelectionModel<DataMessage>(false, []);

  public showSearch = false;

  constructor( private _router: Router, public dialog: MatDialog, private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.dataMessages.subscribe( response => {
      // console.log( 'These are messages from the DB -> ' + JSON.stringify( response, null, 4 ) );
      this.dataSource = response;
    });
    this.dataService.getMessages();
    // console.log( 'These are messages from the db after assignment -> ' + JSON.stringify( this.dataSource, null, 4 ) );
  }

  selectedMessage( row: DataMessage ) {
    this.selectedRow = row;
    this.selection.clear();
    this.selection.select(row);
  }

  orderResponse( selectedRow : DataMessage ) {

    const dialogRef = this.dialog.open( MessageOrderResponseComponent, {
      // width: 'auto',
      panelClass: 'width-of-the-message-order-dialog',
      data: {
        recordDetails: JSON.parse(JSON.stringify(selectedRow))
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if ( result === 'refresh' ) {
        // this._router.navigate([ 'manageContracts' ]);
        this.dataService.getMessages();
        //window.scrollTo(0,0);
        const element = document.querySelector('#pageTop');
        element.scrollIntoView();
      }
    });

  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  onKeyUp( searchValue: any ) {

  }
}
