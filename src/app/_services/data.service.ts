import { Injectable }             from '@angular/core';
import { HttpClient }             from '@angular/common/http';
import { BehaviorSubject }        from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { plainToClass }           from 'class-transformer';
import { DataMessages }           from '../_shared/data-messages';

@Injectable()
export class DataService {

  public messages: DataMessages;


  private dataMessagesSubject = new BehaviorSubject<DataMessages>( this.messages );
  public dataMessages = this.dataMessagesSubject.asObservable();

  constructor( public http: HttpClient ) {}


  public getMessages() {

    this.http
      .get('/api/data/messages' )
      .map(response => {
        // console.log( 'DataService - Before transformation: ',  response );
        const dataMessages = plainToClass( DataMessages, response as Object );
        // console.log( 'DataService - After transformation: ',  dataMessages );
        return dataMessages;
      })
      .subscribe(dataMessages => {
        this.dataMessagesSubject.next( dataMessages );
      });

  }

  public createMessage( message: any ) {
    // console.log( 'data.service - Here is the message -> ' + JSON.stringify( message, null, 4 ) );
    return this.http.post('/api/data/', message );
  }
}
