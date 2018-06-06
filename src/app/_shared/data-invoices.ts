import { Invoice } from './invoice-interface';

export const INVOICES: Invoice[] = [
  {invoice: '12345-789-0781', buyerName: 'Kaufland Warenhandel GmbH & Co. KG', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: 5375.81, advancePayment: 1456, totalBackPayment: 12453, feesAmount: 365.12, feesDescription: '3% per 60 days', advancedInstallment: 1619, advancedRate: '80%', currency: 'EUR', status: 'Not financeable', active: false},
  {invoice: '12345-789-0782', buyerName: 'Kaufland Warenhandel GmbH & Co. KG', dueDate: '2018-10-16T17:57:28.556094Z', invoiceValue: 1317.96, advancePayment: 1456, totalBackPayment: 12453, feesAmount: 365.12, feesDescription: '3% per 60 days', advancedInstallment: 1619, advancedRate: '80%', currency: 'EUR', status: 'Finance now', active: true},
  {invoice: '12345-789-0783', buyerName: 'EDEKA Zentralhandels GmbH', dueDate: '2019-10-16T17:57:28.556094Z', invoiceValue: 1964.71, advancePayment: 1456, totalBackPayment: 12453, feesAmount: 365.12, feesDescription: '3% per 60 days', advancedInstallment: 1871, advancedRate: '80%', currency: 'EUR', status: 'Finance now', active: true},
  {invoice: '12345-789-0784', buyerName: 'EDEKA Zentralhandels GmbH', dueDate: '2022-10-13T17:57:28.556094Z', invoiceValue: 654.98, advancePayment: 1456, totalBackPayment: 12453, feesAmount: 365.12, feesDescription: '3% per 60 days', advancedInstallment: 1619, advancedRate: '80%', currency: 'EUR', status: 'Not financeable', active: false},
  {invoice: '12345-789-0785', buyerName: 'Rewe Zentrale', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: 5003.49, advancePayment: 1456, totalBackPayment: 12453, feesAmount: 365.12, feesDescription: '3% per 60 days', advancedInstallment: 1619, advancedRate: '80%', currency: 'EUR', status: 'Not financeable', active: false},
  {invoice: '12345-789-0786', buyerName: 'Rewe Zentrale', dueDate: '2017-11-10T17:57:28.556094Z', invoiceValue: 2412.97, advancePayment: 1456, totalBackPayment: 12453, feesAmount: 365.12, feesDescription: '3% per 60 days', advancedInstallment: 1619, advancedRate: '80%', currency: 'EUR', status: 'Not financeable', active: false},
  {invoice: '12345-789-0787', buyerName: 'Rewe Zentrale', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: 25.46, advancePayment: 1456, totalBackPayment: 12453, feesAmount: 365.12, feesDescription: '3% per 60 days', advancedInstallment: 1619, advancedRate: '80%', currency: 'EUR', status: 'Finance now', active: true},
  {invoice: '12345-789-0785', buyerName: 'All Invoices for Rewe​', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: 256334.00, advancePayment: 1456, totalBackPayment: 12453, feesAmount: 365.12, feesDescription: '2.98%% per 60 days', advancedInstallment: 1619, advancedRate: '80%', currency: 'EUR', status: 'Not financeable', active: false},
  {invoice: '12345-789-0786', buyerName: 'All invoices for EDEKA', dueDate: '2017-11-10T17:57:28.556094Z', invoiceValue: 657925.00, advancePayment: 1456, totalBackPayment: 12453, feesAmount: 365.12, feesDescription: '2.7% per 60 days', advancedInstallment: 1619, advancedRate: '80%', currency: 'EUR', status: 'Not financeable', active: false},
  {invoice: '12345-789-0787', buyerName: 'All invoices Kaufland', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: 163181.25, advancePayment: 1456, totalBackPayment: 12453, feesAmount: 365.12, feesDescription: '3% per 60 days', advancedInstallment: 1619, advancedRate: '80%', currency: 'EUR', status: 'Finance now', active: true}
];
