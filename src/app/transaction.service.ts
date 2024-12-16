import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions: Transaction[] = [];
  private idCounter = 0;

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  addTransaction(transaction: Transaction): void {
    transaction.id = ++this.idCounter;
    this.transactions.push(transaction);
  }

  deleteTransaction(id: number): void {
    this.transactions = this.transactions.filter((t) => t.id !== id);
  }

  editTransaction(updatedTransaction: Transaction): void {
    const index = this.transactions.findIndex((t) => t.id === updatedTransaction.id);
    if (index !== -1) {
      this.transactions[index] = updatedTransaction;
    }
  }

  calculateTotals(): { income: number; expense: number; balance: number } {
    const income = this.transactions
      .filter((t) => t.type === 'Income')
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = this.transactions
      .filter((t) => t.type === 'Expense')
      .reduce((sum, t) => sum + t.amount, 0);
    return { income, expense, balance: income - expense };
  }
}
