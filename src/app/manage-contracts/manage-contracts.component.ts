import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatPaginator, MatSort } from '@angular/material';
import { Sort } from '@angular/material';
// import {ExampleDataSource} from './manage-contracts.component-new';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable, fromEvent } from 'rxjs';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
// import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-manage-contracts',
  templateUrl: './manage-contracts.component.html',
  styleUrls: ['./manage-contracts.component.scss']
})
export class ManageContractsComponent implements OnInit {

  displayedColumns = ['color', 'documentDate', 'type', 'partner', 'description', 'download'];
  // dataSource = CONTRACT_LIST_DATA;
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  sortedData: ContractList[];
  // -------------- SOME DUMMY DATA ------------------
  numberOfSentInvoices = 30;
  totalAmount = 12367.67;
  currency = 'USD';


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  constructor( sanitizer: DomSanitizer, iconRegistry: MatIconRegistry ) {



    iconRegistry.addSvgIcon(
      'download_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_file_download_black_24px.svg'));
  }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    // Observable for the filter
    fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
    // this.sortedData = this.dataSource.slice();
  }





  // sortData( sort: Sort ) {
  //   const data = this.dataSource.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     return;
  //   }
  //
  //   this.sortedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'color': return compare(a.color, b.color, isAsc);
  //       case 'documentDate': return compare(a.documentDate, b.documentDate, isAsc);
  //       case 'type': return compare(a.type, b.type, isAsc);
  //       case 'partner': return compare(a.partner, b.partner, isAsc);
  //       case 'description': return compare(a.description, b.description, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}

// function compare(a, b, isAsc) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }


export interface ContractList {
  color: string;
  documentDate: string;
  type: string;
  partner: string;
  description: string;
  download: boolean;
  icon: string;
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const PARTNERS = ['Rewe', 'Aldi Nord', 'Koller SM Logistics Services' ];
const TYPES_OF_CONTRACT = [ 'Offer Submitted', 'Contract' ];
const DATES = [ '2017-02-02T17:57:28.556094Z', '2018-05-02T13:50:00.556094Z', '2019-03-02T17:57:28.556094Z' ];
const DESCRIPTIONS = [ 'Factoring Contract Rechnungsnr: 12345-789', 'Logistics Request Order Number: 12345-789 IFTMIN: 2345 - 2017', 'Logistics Request Transaction/Order Number: 12345-789 Logistics instruction message: 2345 Delivery note: 2345 - 20147 -56' ];

/*
const CONTRACT_LIST_DATA: ContractList[] = [
  { color: 'red', documentDate: '2017-02-02T17:57:28.556094Z', type: 'Offer Submitted', partner: 'Rewe', description: 'Factoring Contract Rechnungsnr: 12345-789', download: true, icon: 'download_icon'},
  { color: 'green', documentDate: '2017-02-02T17:57:28.556094Z', type: 'Contract', partner: 'Rewe', description: 'Logistics Request Order Number: 12345-789 IFTMIN: 2345 - 2017', download: true, icon: 'download_icon'},
  { color: 'yellow', documentDate: '2017-02-02T17:57:28.556094Z', type: 'Contract', partner: 'Rewe', description: 'Factoring Contract Rechnungsnr: 12345-789', download: true, icon: 'download_icon'},
  { color: 'blue', documentDate: '2017-02-02T17:57:28.556094Z', type: 'Offer Submitted', partner: 'Aldi Nord', description: 'Factoring Contract Rechnungsnr: 12345-789', download: true, icon: 'download_icon'},
  { color: 'yellow', documentDate: '2017-02-02T17:57:28.556094Z', type: 'Offer Submitted', partner: 'Aldi Nord', description: 'Factoring Contract Rechnungsnr: 12345-789', download: true, icon: 'download_icon'},
  { color: 'green', documentDate: '2017-02-02T17:57:28.556094Z', type: 'Contract', partner: 'Rewe', description: 'Factoring Contract Rechnungsnr: 12345-789', download: true, icon: 'download_icon'},
  { color: 'green', documentDate: '2017-02-02T17:57:28.556094Z', type: 'Contract', partner: 'Aldi Nord', description: 'Factoring Contract Rechnungsnr: 12345-789', download: true, icon: 'download_icon'},
  { color: 'red', documentDate: '2017-02-02T17:57:28.556094Z', type: 'Offer Submitted', partner: 'Koller SM Logistics Services', description: 'Factoring Contract Rechnungsnr: 12345-789', download: true, icon: 'download_icon'},
  { color: 'red', documentDate: '2017-02-02T17:57:28.556094Z', type: 'Contract', partner: 'Koller SM Logistics Services', description: 'Logistics Request Transaction/Order Number: 12345-789 Logistics instruction message: 2345 Delivery note: 2345 - 20147 -56', download: true, icon: 'download_icon'},
  { color: 'red', documentDate: '2017-02-02T17:57:28.556094Z', type: 'Offer Submitted', partner: 'Rewe', description: 'Factoring Contract Rechnungsnr: 12345-789', download: true, icon: 'download_icon'}
  ];
*/

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<ContractList[]> = new BehaviorSubject<ContractList[]>([]);
  get data(): ContractList[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) { this.addContract(); }
  }

  /** Adds a new user to the database. */
  addContract() {
    const copiedData = this.data.slice();
    copiedData.push( this.createNewContract() );
    this.dataChange.next( copiedData );
  }

  /** Builds and returns a new User. */
  private createNewContract() {
    // const partner =
    //   PARTNERS[Math.round(Math.random() * (PARTNERS.length - 1))] + ' ' +
    //   PARTNERS[Math.round(Math.random() * (PARTNERS.length - 1))].charAt(0) + '.';

    return {
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
      documentDate: DATES[Math.round(Math.random() * (DATES.length - 1))],
      type: TYPES_OF_CONTRACT[Math.round(Math.random() * (TYPES_OF_CONTRACT.length - 1))],
      partner: PARTNERS[Math.round(Math.random() * (PARTNERS.length - 1))],
      description: DESCRIPTIONS[Math.round(Math.random() * (DESCRIPTIONS.length - 1))],
      download: true,
      icon: 'download_icon'
    };
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  filteredData: ContractList[] = [];
  renderedData: ContractList[] = [];

  constructor(private _exampleDatabase: ExampleDatabase,
              private _paginator: MatPaginator,
              private _sort: MatSort) {
    super();

    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ContractList[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._exampleDatabase.data.slice().filter((item: ContractList) => {
        let searchStr = (item.partner).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    });
  }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  sortData(data: ContractList[]): ContractList[] {
    if (!this._sort.active || this._sort.direction === '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'color': [propertyA, propertyB] = [a.color, b.color]; break;
        case 'documentDate': [propertyA, propertyB] = [a.documentDate, b.documentDate]; break;
        case 'type': [propertyA, propertyB] = [a.type, b.type]; break;
        case 'partner': [propertyA, propertyB] = [a.partner, b.partner]; break;
        case 'description': [propertyA, propertyB] = [a.description, b.description]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
