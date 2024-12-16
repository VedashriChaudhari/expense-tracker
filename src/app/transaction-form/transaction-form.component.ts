import { Component } from '@angular/core';
import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent {
  transaction: Transaction = {
    id: 0,
    type: 'Income',
    category: '',
    amount: 0,
    date: new Date(),
  };

  constructor(private transactionService: TransactionService) {}

  submitTransaction(): void {
    this.transactionService.addTransaction({ ...this.transaction });
    this.resetForm();
  }

  resetForm(): void {
    this.transaction = { id: 0, type: 'Income', category: '', amount: 0, date: new Date() };
  }
}
