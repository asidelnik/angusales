import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../customer.service';


@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<AddCustomerComponent>, 
        @Inject(MAT_DIALOG_DATA) public data: any, 
        private customerService: CustomerService) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
    }

    addCustomer(customer) {
        this.customerService.addCustomer(customer);
    }
}
