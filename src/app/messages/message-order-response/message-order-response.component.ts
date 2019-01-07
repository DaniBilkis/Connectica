import { Component, OnInit, Inject, ViewChild }     from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTable }  from '@angular/material';
import { AlertService, DataService }                from '../../_services/';

@Component({
  selector: 'app-message-order-response',
  templateUrl: './message-order-response.component.html',
  styleUrls: ['./message-order-response.component.scss']
})
export class MessageOrderResponseComponent implements OnInit {

  // displayedColumns = ['partner', 'messageNumber', 'inOutMessageType', 'typeOfMessage', 'date'];
  displayedDetailedColumns = ['position', 'article', 'description', 'quantity', 'price', 'deliveryDate', 'total', 'delete'];
  //totalPrice: number;
  @ViewChild(MatTable) table: MatTable<any>;
  backupDataObject: any;

  constructor (
    public dialogRef: MatDialogRef<MessageOrderResponseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.backupDataObject = JSON.parse( JSON.stringify( this.data ) );
  }

  refresh() {
    this.table.renderRows();
  }


  // (keyup)="onKey($event, item.LINE_ITEM_ID, item.ARTICLE_PRICE.PRICE_AMOUNT, item.ARTICLE_PRICE.PRICE_LINE_AMOUNT)"
  // {{item.ARTICLE_PRICE.PRICE_LINE_AMOUNT}}

  onKeyQuantity(event: any, id: any ) { // without type info
    console.log( 'Incoming values - ' + event.target.value + ' ' + id );
    const foundIndex = this.data.recordDetails.ITEM_LIST.findIndex( x => x.LINE_ITEM_ID === id );
    console.log('here is the index -> ' + foundIndex );
    // console.log('here is the object -> ' + JSON.stringify( this.data.recordDetails.ITEM_LIST[ foundIndex ], null, 4 ) );
    this.data.recordDetails.ITEM_LIST[ foundIndex ].ARTICLE_PRICE.PRICE_LINE_AMOUNT = event.target.value * this.data.recordDetails.ITEM_LIST[ foundIndex ].ARTICLE_PRICE.PRICE_AMOUNT;
    // total = event.target.value * quantity;
    // console.log( 'Total value - ' + JSON.stringify( this.data.recordDetails.ITEM_LIST[ foundIndex ].ARTICLE_PRICE.PRICE_LINE_AMOUNT, null, 4 ) );
  }

  onKeyPrice(event: any, id: any ) { // without type info
    console.log( 'Incoming values - ' + event.target.value + ' ' + id );
    const foundIndex = this.data.recordDetails.ITEM_LIST.findIndex( x => x.LINE_ITEM_ID === id );
    console.log('here is the index -> ' + foundIndex );
    // console.log('here is the object -> ' + JSON.stringify( this.data.recordDetails.ITEM_LIST[ foundIndex ], null, 4 ) );
    this.data.recordDetails.ITEM_LIST[ foundIndex ].ARTICLE_PRICE.PRICE_LINE_AMOUNT = event.target.value * this.data.recordDetails.ITEM_LIST[ foundIndex ].QUANTITY;
    // total = event.target.value * quantity;
    // console.log( 'Total value - ' + JSON.stringify( this.data.recordDetails.ITEM_LIST[ foundIndex ].ARTICLE_PRICE.PRICE_LINE_AMOUNT, null, 4 ) );
  }

  addNewRow() {
    const numberOfItems = this.data.recordDetails.ITEM_LIST.length;
    console.log( 'Number of Items in the object -> ' + numberOfItems );
    const newLine = JSON.parse( JSON.stringify( this.backupDataObject.recordDetails.ITEM_LIST[ 0 ] ) );
    newLine.LINE_ITEM_ID = numberOfItems + 1;
    newLine.ARTICLE_PRICE.PRICE_LINE_AMOUNT = 0;
    newLine.QUANTITY = 0;
    newLine.ARTICLE_PRICE.PRICE_AMOUNT = 0;
    this.data.recordDetails.ITEM_LIST[ numberOfItems ] = newLine;
    // console.log('here is the updated object -> ' + JSON.stringify( this.data.recordDetails.ITEM_LIST, null, 4 ) );
    // console.log('here is the updated object -> ' + JSON.stringify( this.data, null, 4 ) );
    // const newLineItem = this.data.recordDetails.ITEM_LIST[ 0 ];
    this.refresh();

  }

  deleteRow( event: any, id: any) {
    const foundIndex = this.data.recordDetails.ITEM_LIST.findIndex( x => x.LINE_ITEM_ID === id );
    this.data.recordDetails.ITEM_LIST.splice(foundIndex, 1);
    this.refresh();
  }

  submitResponse() {
    // this.loading = true;
    console.log( 'Creating response message and uploading to mongo' );
    delete this.data.recordDetails["_id"];
    this.data.recordDetails.PROFILE.DESCRIPTION = "Order Response";
    this.data.recordDetails.TYPE_OF_MESSAGE = "Order Response";
    this.dataService.createMessage( this.data )
      .subscribe(
        data => {
          // console.log( data );
          this.alertService.success( data, true );
          // this.router.navigate(['/login']);
        },
        error => {
          // console.log( 'Here is what we have in the error --> ' + JSON.stringify( error, null, 4 ) );
          this.alertService.error( error.error );
          // this.loading = false;
        });

    this.dialogRef.close( 'refresh' );
  }

  closeModal() {
    this.dialogRef.close();
  }
}
