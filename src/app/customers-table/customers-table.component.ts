import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; // , 
import { Customer } from '../customer-model-front';
import { Comment } from '../comment-model-front';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { CustomerService } from '../customer.service';

@Component({
    selector: 'app-customers-table',
    templateUrl: './customers-table.component.html',
    styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
    displayedColumns = ['id', 'firstName', 'lastName', 'company', 'phone'];
    // dataSource = ELEMENT_DATA;
    // animal: string;
    // name: string;
   customers: Customer[] = new Array<Customer>();
    @Input() comments: Comment[] = new Array<Comment>();

    constructor(public dialog: MatDialog, private customerService: CustomerService) { }
    
    ngOnInit() {
        console.log(this.comments);

        this.customers = this.customerService.arrCustomers;

        this.customerService.arrCustomersObservable.subscribe((data)=>{
            this.customers = data;
        })
    }

    openDialog(customer): void {
        console.log(customer);
        
        let dialogRef = this.dialog.open(CustomerInfoComponent, {
            data: customer,
            panelClass: 'custom-dialog-container'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            

            // this.animal = result;
        });
    }
}