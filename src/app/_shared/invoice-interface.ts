export interface Invoice {
  invoice: string;
  buyerName: string;
  dueDate: string;
  invoiceValue: number;
  advancePayment: string;
  totalBackPayment: string;
  feesAmount: string;
  feesDescription: string;
  advancedInstallment: string;
  advancedRate: string;
  currency: string;
  status: string;
  active: boolean;
}
