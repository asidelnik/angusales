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
    comments: Comment[];

    constructor(private companyService: CompanyService, private customerService: CustomerService) { }

    ngOnInit() {
        this.companyService.getCustomers().subscribe((data: Company[]) => {
            this.companies = data;
        });

        this.customerService.getCustomers().subscribe((data: Customer[]) => {
            this.customers = data;
        });
    }

    // showComments(id) {
    //     console.log(id);
    //     console.log("hey");
    //     this.customerService.getComments(id).subscribe((data: Comment[]) => {
    //         this.comments = data;
    //         console.log(this.comments);
    //         console.log(data);
    //     });
    // }
}
