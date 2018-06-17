import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Company } from '../company-model-front';
import { Customer } from '../customer-model-front';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
    selector: 'app-companies-table',
    templateUrl: './companies-table.component.html',
    styleUrls: ['./companies-table.component.css']
})
export class CompaniesTableComponent implements OnInit {
    displayedColumns = ['name', 'address', 'country', 'actions'];
    @Input() companies: Company[] = new Array<Company>();

    constructor(public dialog: MatDialog) {
     }

    ngOnInit() { }

    // addCustomer(companyName): void {

    // }

    addCustomer(companyName){
        console.log("companies-table - addCustomer method:");
        console.log(companyName);
        
        let dialogRef = this.dialog.open(AddCustomerComponent, {
            // data: customer,
            data: companyName,
            panelClass: 'custom-dialog-container'
        });

        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
            console.log(result);
            // this.animal = result;
        });
    }



    editCompany(company) {

    }

    
}