import { TransactionDetails } from './transaction-details/transaction-details';

export const TRANSACTIONS: TransactionDetails[] = [
  {
    typeOfOrder: 'Purchase Order',
    orderNumber: '00776167',
    documentNumber: '123DXS',
    documentSender: 'BAHAG Webedi',
    date: '2017-10-16T17:57:28.556094Z',
    deliveryStatus: 'Confirmed',
    supplier: {
      supplierId: "111776",
      supplierName: "Wolff Winhouse",
      supplierAddress: "Guetenbergstrasse 21",
      supplierSomeNumber: "129992123456"
    },
    buyer: {
      buyerId: "123456ZP",
      buyerName: 'BAHAG AG',
      buyerAddress: 'Guetenbergstrasse 21',
      buyerVAT: 'DE123456778890',
      buyerSomeNumber: '402456345345345'
    },
    shipTo: {
      name: '',
      street: '3990 Vitruvian way',
      city: 'Addison',
      zip: '75001',
      country: 'USA',
      phone: '2145782643',
      email: 'dani.bilkis@gmail.com'
    },
    ultimateCustomer: {
      name: 'Some Name',
      street: '3990 Vitruvian way',
      city: 'Addison',
      zip: '75001',
      country: 'USA',
      phone: '2145782643',
      email: 'dani.bilkis@gmail.com'
    },
    deliveryInfo: {
      earliestDate: '2018-05-31T17:57:28.556094Z',
      latestDate: '2018-06-29T17:57:28.556094Z',
      requestedDate: '2018-06-15T17:57:28.556094Z'
    },
    paymentConditions: {
      paymentDueDate: '2018-06-15T17:57:28.556094Z'
    }
  },
  {
    typeOfOrder: 'Consigment Order',
    orderNumber: '00776167',
    documentNumber: '123DXS',
    documentSender: 'BAHAG Webedi',
    date: '2017-10-16T17:57:28.556094Z',
    deliveryStatus: 'Confirmed',
    supplier: {
      supplierId: '111776',
      supplierName: 'Wolff Winhouse',
      supplierAddress: 'Guetenbergstrasse 21',
      supplierSomeNumber: '129992123456'
    },
    buyer: {
      buyerId: '123456ZP',
      buyerName: 'BAHAG AG',
      buyerAddress: 'Guetenbergstrasse 21',
      buyerVAT: 'DE123456778890',
      buyerSomeNumber: '402456345345345'
    },
    shipTo: {
      name: 'Vasily',
      street: '3990 Vitruvian way',
      city: 'Addison',
      zip: '75001',
      country: 'USA',
      phone: '2145782643',
      email: 'dani.bilkis@gmail.com'
    },
    ultimateCustomer: {
      name: 'Some Name',
      street: '3990 Vitruvian way',
      city: 'Addison',
      zip: '75001',
      country: 'USA',
      phone: '2145782643',
      email: 'dani.bilkis@gmail.com'
    },
    deliveryInfo: {
      earliestDate: '2018-05-31T17:57:28.556094Z',
      latestDate: '2018-06-29T17:57:28.556094Z',
      requestedDate: '2018-06-15T17:57:28.556094Z'
    },
    paymentConditions: {
      paymentDueDate: '2018-06-15T17:57:28.556094Z'
    }
  }
];
