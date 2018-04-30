import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-manage-contracts',
  templateUrl: './manage-contracts.component.html',
  styleUrls: ['./manage-contracts.component.scss']
})
export class ManageContractsComponent implements OnInit {

  displayedColumns = ['color', 'documentDate', 'type', 'partner', 'description', 'download'];
  dataSource = CONTRACT_LIST_DATA;

  constructor( sanitizer: DomSanitizer, iconRegistry: MatIconRegistry ) {
    iconRegistry.addSvgIcon(
      'download_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_file_download_black_24px.svg'));
  }

  ngOnInit() {
  }

}



export interface ContractList {
  color: string;
  documentDate: string;
  type: string;
  partner: string;
  description: string;
  download: boolean;
  icon: string;
}

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
