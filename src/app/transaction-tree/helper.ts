import * as _ from 'underscore';
import Helper from '../shared/helper';
// import Modernizr from 'modernizr'


export class SubwayMapHelper {

  // TODO: stub
  // const Modernizr = {}

  helper = new Helper();

  halton( index: number, base: number ): number {
    let result = 0;
    let f = 1 / base;
    let i = index;

    while ( i > 0 ) {
      result = result + f * (i % base);
      i = Math.floor(i / base);
      f = f / base;
    }
    return result;
  }

  hRandom( min: number, max: number ): number {
    if ( this.helper.hRandomIndex === undefined) { this.helper.hRandomIndex = 0; }
    let h = this.halton( this.helper.hRandomIndex, 3 );
    const rand = h * ( max - min ) + min;

    this.helper.hRandomIndex++;

    return rand;
  }

  /*
  floorToNearest( num: number, nearest: number ): number {
    return nearest * Math.floor(num / nearest );
  }

  localStore( key: any ): any {
    if (!Modernizr.localstorage) return false;

    return JSON.parse( localStorage.getItem(key) );
  }

  localStoreRemove( key: any ): void {
    if (!Modernizr.localstorage) return false;

    localStorage.removeItem(key);
  }

  localStoreSet( key: any, value: any ): void {
    if (!Modernizr.localstorage) return false;

    localStorage.setItem(key, JSON.stringify(value));
  }
*/
  parameterize( str: string ): string {
    return str.trim().replace(/[^a-zA-Z0-9-\s]/g, '').replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
  }
/*
  parseQueryString( queryString: string ): any[] {
    let params;
    if ( queryString ) {
      _.each(
        _.map( decodeURI(queryString).split(/&/g), function(el, i) {
          let aux = el.split('=');
          let o: any[];
          if ( aux.length >= 1 ) {
            let val = undefined;
            if ( aux.length === 2) {
              val = aux[1];
            }
            o[ aux[ 0 ] ] = val;
          }
          return o;
        }),
        function( o ) {
          _.extend( params, o );
        }
      );
    }
    return params;
  }

  randomString( length: number ): string {
    someText = '';
    alpha = 'abcdefghijklmnopqrstuvwxyz';
    alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789';
    length = length || 8;
    for( i = 0; i < length; i++ ) {
      if ( i <= 0 ) { // must start with letter
        this.someText += this.alpha.charAt( Math.floor(Math.random() * this.alpha.length) );
      } else {
        this.someText += this.alphanum.charAt( Math.floor(Math.random() * this.alphanum.length) );
      }
    }
    return someText;
  }

  round( num: number, dec: number): number {
    num = parseFloat( num );
    dec = dec || 0;
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
  }

  roundToNearest( num: number, nearest: number): number {
    return nearest * Math.round(num / nearest);
  }

  token(): number {
    return Math.random().toString(36).substr(2);
  }
*/
}
