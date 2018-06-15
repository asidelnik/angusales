import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer-model-front';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
    displayedColumns = ['id', 'firstName', 'lastName', 'company', 'phone'];
    // dataSource = ELEMENT_DATA;
    @Input() customers: Customer[] = new Array<Customer>();

    constructor() { }

    ngOnInit() { }
}