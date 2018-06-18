import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; // , 
import { Customer } from '../customer-model-front';
import { Comment } from '../comment-model-front';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { CustomerService } from '../customer.service';
import { CommentService } from '../comment.service';


@Component({
    selector: 'app-customers-table',
    templateUrl: './customers-table.component.html',
    styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
    displayedColumns = ['id', 'firstName', 'lastName', 'company', 'phone', 'actions'];
    @Input() customers: Customer[] = new Array<Customer>();
    @Input() comments: Comment[] = new Array<Comment>();

    constructor(public dialog: MatDialog, private customerService: CustomerService, private commentService: CommentService) { }
    
    ngOnInit() {
        // console.log(this.comments);
    }

    showCustomerInfo(customer): void {
        // console.log(customer);
        
        let dialogRef = this.dialog.open(CustomerInfoComponent, {
            data: customer,
            panelClass: 'custom-dialog-container'
        });

        dialogRef.afterClosed().subscribe(result => {});
    }

    deleteCustomer(customerId) {
        this.commentService.deleteCustomerComments(customerId).subscribe((data) => {});
        this.customerService.deleteCustomer(customerId);
    }
}