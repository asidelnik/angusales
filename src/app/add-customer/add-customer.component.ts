import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer-model-front';



@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
    
    newCustomer: Customer = new Customer();
    companyName: string;

    constructor(public dialogRef: MatDialogRef<AddCustomerComponent>, 
        @Inject(MAT_DIALOG_DATA) public data: any, 
        private customerService: CustomerService) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {}

    addCustomer(companyName) {
        this.newCustomer.company = companyName;
        this.customerService.addCustomer(this.newCustomer);
        this.dialogRef.close();
    }
}
