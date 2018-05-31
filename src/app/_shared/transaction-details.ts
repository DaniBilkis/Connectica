import { TransactionDetailsNotes } from './transaction-details-notes';

export class TransactionDetails {
  typeOfOrder: string;
  orderNumber: string;
  documentNumber: string;
  documentSender: string;
  date: string;
  deliveryStatus: string;
  supplier: {
    supplierId: string;
    supplierName: string;
    supplierAddress: string;
    supplierSomeNumber: string;
  };
  buyer: {
    buyerId: string;
    buyerName: string;
    buyerAddress: string;
    buyerVAT: string;
    buyerSomeNumber: string;
  };
  shipTo: {
    name: string;
    street: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
    email: string;
  };
  ultimateCustomer: {
    name: string;
    street: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
    email: string;
  };
  deliveryInfo: {
    earliestDate: string;
    latestDate: string;
    requestedDate: string;
  };
  paymentConditions: {
    paymentDueDate: string;
  };
  notes?: TransactionDetailsNotes[];
  articles?: {
    pos: number;
    articleNumber: string;
    description: string;
    quantity: number;
    quantityUnit: string;
    pricePerUnit: number;
    currency: string;
  };
}
