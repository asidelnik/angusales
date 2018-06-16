import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CompanyService } from '../company.service';
import { Customer } from '../customer-model-front';
import { Company } from '../company-model-front';


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    companies: Company[];
    customers: Customer[];

    constructor(private companyService: CompanyService, private customerService: CustomerService) { }

    ngOnInit() {
        this.companyService.getCustomers().subscribe((data: Company[]) => {
            this.companies = data;
            console.log(this.companies);
        });

        this.customerService.getCustomers().subscribe((data: Customer[]) => {
            this.customers = data;
            console.log(this.customers);
            console.log(data);
            
        });
    }
}
