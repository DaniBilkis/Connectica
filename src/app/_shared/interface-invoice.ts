export interface Invoice {
  invoice: string;
  buyerName: string;
  dueDate: string;
  invoiceValue: number;
  advancePayment: number;
  totalBackPayment: number;
  feesAmount: number;
  feesDescription: string;
  advancedInstallment: number;
  advancedRate: string;
  currency: string;
  status: string;
  active: boolean;
}
