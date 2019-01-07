// import { Message } from './interface-message';

import { Type }       from 'class-transformer';
import { DataMessage }    from './data-message';

export class DataMessages {

  incomplete_results: boolean;

  @Type(() => DataMessage) // providing a Type is required.
  private messages: DataMessage[];

  total_count: number;

  getMessages(): DataMessage[] {
    return this.messages;
  }

}

/*
export const MESSAGES: Message[] = [
  { partner: 'Rowe', messageNumber: 123456789, inOutMessageType: 'Inbound', typeOfMessage: 'Order', date: '2017-10-16T17:57:28.556094Z', supplierName: 'Muster GmbH', supplierAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', buyerName: 'Muster GmbH', buyerAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', deliverTo: 'Muster GmbH', deliveryAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', ultimateCustomerName: 'Muster GmbH', ultimateCustomerAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', orderDate: '2017-10-16T17:57:28.556094Z', orderNoCustomer: '04371030', earliestDeliveryDate: '2017-10-16T17:57:28.556094Z', latestDeliveryDate: '2017-10-16T17:57:28.556094Z', requestedDeliveryDate: '2017-10-16T17:57:28.556094Z', paymentDueDate: '2017-10-16T17:57:28.556094Z', currency: 'EUR', totalCharge: 1234.56, messageDetails: [
      { position: 10, articleNumber: 12000034, description: 'Article 1', quantity: 100, price: 69.50, totalCharge: 6950 },
      { position: 20, articleNumber: 10987456312, description: 'Article 2', totalCharge: 324 }
    ] },
  { partner: 'A', messageNumber: 123456789, inOutMessageType: 'Inbound', typeOfMessage: 'Order', date: '2017-10-16T17:57:28.556094Z', supplierName: 'Muster GmbH', supplierAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', buyerName: 'Muster GmbH', buyerAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', deliverTo: 'Muster GmbH', deliveryAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', ultimateCustomerName: 'Muster GmbH', ultimateCustomerAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', orderDate: '2017-10-16T17:57:28.556094Z', orderNoCustomer: '04371030', earliestDeliveryDate: '2017-10-16T17:57:28.556094Z', latestDeliveryDate: '2017-10-16T17:57:28.556094Z', requestedDeliveryDate: '2017-10-16T17:57:28.556094Z', paymentDueDate: '2017-10-16T17:57:28.556094Z', currency: 'EUR', totalCharge: 1234.56, messageDetails: [
      { position: 10, articleNumber: 12000034, description: 'Article 1', quantity: 100, price: 69.50, totalCharge: 6950 },
      { position: 20, articleNumber: 10987456312, description: 'Article 2', totalCharge: 324 }
    ] },
  { partner: 'B', messageNumber: 123456789, inOutMessageType: 'Inbound', typeOfMessage: 'Order', date: '2017-10-16T17:57:28.556094Z', supplierName: 'Muster GmbH', supplierAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', buyerName: 'Muster GmbH', buyerAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', deliverTo: 'Muster GmbH', deliveryAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', ultimateCustomerName: 'Muster GmbH', ultimateCustomerAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', orderDate: '2017-10-16T17:57:28.556094Z', orderNoCustomer: '04371030', earliestDeliveryDate: '2017-10-16T17:57:28.556094Z', latestDeliveryDate: '2017-10-16T17:57:28.556094Z', requestedDeliveryDate: '2017-10-16T17:57:28.556094Z', paymentDueDate: '2017-10-16T17:57:28.556094Z', currency: 'EUR', totalCharge: 1234.56, messageDetails: [
      { position: 10, articleNumber: 12000034, description: 'Article 1', quantity: 100, price: 69.50, totalCharge: 6950 },
      { position: 20, articleNumber: 10987456312, description: 'Article 2', totalCharge: 324 }
    ] },
  { partner: 'C', messageNumber: 123456789, inOutMessageType: 'Inbound', typeOfMessage: 'Order', date: '2017-10-16T17:57:28.556094Z', supplierName: 'Muster GmbH', supplierAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', buyerName: 'Muster GmbH', buyerAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', deliverTo: 'Muster GmbH', deliveryAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', ultimateCustomerName: 'Muster GmbH', ultimateCustomerAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', orderDate: '2017-10-16T17:57:28.556094Z', orderNoCustomer: '04371030', earliestDeliveryDate: '2017-10-16T17:57:28.556094Z', latestDeliveryDate: '2017-10-16T17:57:28.556094Z', requestedDeliveryDate: '2017-10-16T17:57:28.556094Z', paymentDueDate: '2017-10-16T17:57:28.556094Z', currency: 'EUR', totalCharge: 1234.56, messageDetails: [
      { position: 10, articleNumber: 12000034, description: 'Article 1', quantity: 100, price: 69.50, totalCharge: 6950 },
      { position: 20, articleNumber: 10987456312, description: 'Article 2', totalCharge: 324 }
    ] },
  { partner: 'D', messageNumber: 123456789, inOutMessageType: 'Inbound', typeOfMessage: 'Order', date: '2017-10-16T17:57:28.556094Z', supplierName: 'Muster GmbH', supplierAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', buyerName: 'Muster GmbH', buyerAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', deliverTo: 'Muster GmbH', deliveryAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', ultimateCustomerName: 'Muster GmbH', ultimateCustomerAddress: 'Musterstrasse 12 DE-12345 Mustartstadt', orderDate: '2017-10-16T17:57:28.556094Z', orderNoCustomer: '04371030', earliestDeliveryDate: '2017-10-16T17:57:28.556094Z', latestDeliveryDate: '2017-10-16T17:57:28.556094Z', requestedDeliveryDate: '2017-10-16T17:57:28.556094Z', paymentDueDate: '2017-10-16T17:57:28.556094Z', currency: 'EUR', totalCharge: 1234.56, messageDetails: [
      { position: 10, articleNumber: 12000034, description: 'Article 1', quantity: 100, price: 69.50, totalCharge: 6950 },
      { position: 20, articleNumber: 10987456312, description: 'Article 2', totalCharge: 324 }
    ] }
];
*/
