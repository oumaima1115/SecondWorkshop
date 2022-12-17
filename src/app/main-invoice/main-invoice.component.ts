import { Component, OnInit } from '@angular/core';
import { Invoice } from '../models/invoice.model';

@Component({
  selector: 'app-main-invoice',
  templateUrl: './main-invoice.component.html',
  styleUrls: ['./main-invoice.component.css']
})
export class MainInvoiceComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
