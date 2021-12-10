import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dataSource = new MatTableDataSource<any>(); // To bind the data into the grid
  operationList: any[] = [
    { code: 0, description: 'No Match', icon: 'warning_amber' },
    { code: 1, description: 'Likely Match', icon: 'description' },
    { code: 2, description: 'Clarification Awaited', icon: 'autorenew' },
    {
      code: 3,
      description: 'Clarification Received',
      icon: 'play_circle_filled',
    },
  ];
  displayedColumns: string[] = [
    'task',
    'companyCode',
    'bank',
    'customerNo',
    'customerName',
    'payamount',
    'currency',
    'status',
  ];
  dataList: any[] = [
    {
      task: 124,
      companyCode: 'GB110',
      bank: 'No Data',
      customerNo: 12121,
      customerName: 'Manoj',
      payamount: 5000,
      currency: 'INR',
      status: 'No Match',
    },
    {
      task: 524,
      companyCode: 'GB110',
      bank: 'No Data',
      customerNo: 12121,
      customerName: 'Ashwin',
      payamount: 5000,
      currency: 'INR',
      status: 'No Match',
    },
    {
      task: 134,
      companyCode: 'GB110',
      bank: 'No Data',
      customerNo: 12121,
      customerName: 'Badri',
      payamount: 5000,
      currency: 'INR',
      status: 'No Match',
    },
    {
      task: 624,
      companyCode: 'GB110',
      bank: 'No Data',
      customerNo: 12121,
      customerName: 'Nandhu',
      payamount: 5000,
      currency: 'INR',
      status: 'No Match',
    },
    {
      task: 174,
      companyCode: 'GB110',
      bank: 'No Data',
      customerNo: 12121,
      customerName: 'Ajay',
      payamount: 5000,
      currency: 'INR',
      status: 'No Match',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log(this.dataList);
    this.dataSource = new MatTableDataSource(this.dataList);
    console.log(this.dataSource);
  }
}
