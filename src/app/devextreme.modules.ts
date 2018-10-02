import { NgModule }             from '@angular/core';

import {
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule
} from 'devextreme-angular';

@NgModule({
  imports: [
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule
  ],
  exports: [
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule
  ]
})
export class DevExtremeModules {}
