export interface Transaction {
    id: number;
    type: 'Income' | 'Expense';
    category: string;
    amount: number;
    date: Date;
  }
  