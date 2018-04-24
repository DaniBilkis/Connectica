import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { FlexLayoutModule }             from '@angular/flex-layout';
import { HttpClientModule }             from '@angular/common/http';

import { MaterialModule }               from './material.module';
import { AppRoutingModule }             from './app-routing/app-routing.module';


import { AppComponent }                 from './app.component';
import { MenuComponent }                from './menu/menu.component';
import { TransactionsComponent }        from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
