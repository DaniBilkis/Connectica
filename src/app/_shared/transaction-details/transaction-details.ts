import { TransactionDetailsNotes } from './transaction-details-notes';
import {TransactionDetailsSupplier} from './transaction-details-supplier';
import {TransactionDetailsBuyer} from './transaction-details-buyer';
import {TransactionDetailsShipTo} from './transaction-details-shipTo';
import {TransactionDetailsUltimateCustomer} from './transaction-details-ultimateCustomer';
import {TransactionDetailsDeliveryInfo} from './transaction-details-deliveryInfo';
import {TransactionDetailsArticles} from './transaction-details-articles';
import {TransactionDetailsPaymentConditions} from './transaction-details-paymentConditions';

export class TransactionDetails {
  typeOfOrder: string;
  orderNumber: string;
  documentNumber: string;
  documentSender: string;
  date: string;
  deliveryStatus: string;
  supplier: TransactionDetailsSupplier;
  buyer: TransactionDetailsBuyer;
  shipTo: TransactionDetailsShipTo;
  ultimateCustomer: TransactionDetailsUltimateCustomer;
  deliveryInfo: TransactionDetailsDeliveryInfo;
  paymentConditions: TransactionDetailsPaymentConditions;
  notes?: TransactionDetailsNotes[];
  articles?: TransactionDetailsArticles;
}
