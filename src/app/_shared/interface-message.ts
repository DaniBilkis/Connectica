import { MessageDetails } from './interface-message-details';

export interface Message {
  partner: string;
  messageNumber: number;
  inOutMessageType: string; // Inbound / Outbound
  typeOfMessage: string; // Order / Shipment / etc.
  date: string;
  // ----------- SUPPLIER ----
  supplierName: string;
  supplierAddress: string;
  // ----------- BUYER ----
  buyerName: string;
  buyerAddress: string;
  // ----------- DELIVERY ADDRESS ----
  deliverTo: string;
  deliveryAddress: string;
  // ----------- ULTIMATE CUSTOMER ----
  ultimateCustomerName: string;
  ultimateCustomerAddress: string;
  // ----------- VARIOUS INFO ----
  orderDate: string;
  orderNoCustomer: string;
  // ----------- DELIVERY INFO ----
  earliestDeliveryDate: string;
  latestDeliveryDate: string;
  requestedDeliveryDate: string;
  // ----------- PAYMENT CONDITIONS ----
  paymentDueDate: string;
  // ----------- ORDER DETAILS ----
  messageDetails: MessageDetails[];
  // ----------- TOTALS ----
  totalCharge: number;
  currency: string;
}
