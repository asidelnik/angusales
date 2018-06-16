import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer-model-front';

@Component({
    selector: 'app-companies-table',
    templateUrl: './companies-table.component.html',
    styleUrls: ['./companies-table.component.css']
})
export class CompaniesTableComponent implements OnInit {
    displayedColumns = ['name', 'address', 'country'];
    @Input() companies: Customer[] = new Array<Customer>();

    constructor() { }

    ngOnInit() { }
}