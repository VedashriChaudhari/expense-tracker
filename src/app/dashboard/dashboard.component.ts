import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totals = { income: 0, expense: 0, balance: 0 };

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.updateTotals();
  }

  updateTotals(): void {
    this.totals = this.transactionService.calculateTotals();
  }
}
