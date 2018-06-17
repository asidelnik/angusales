import { Component, OnInit, Inject } from '@angular/core';  //EventEmitter, Output
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../customer.service';
import { Comment } from '../comment-model-front';


@Component({
    selector: 'app-customer-info',
    templateUrl: './customer-info.component.html',
    styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

    comments : Comment[];

    constructor(
        public dialogRef: MatDialogRef<CustomerInfoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private customerService: CustomerService) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
    }

    showComments(customerId) {
        this.customerService.getComments(customerId).subscribe((data: Comment[]) => {
            this.comments = data;
            console.log(this.comments);
        });
    }
}