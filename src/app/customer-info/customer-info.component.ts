import { Component, OnInit, Inject } from '@angular/core';  //EventEmitter, Output
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../customer.service';
import { CommentService } from '../comment.service';
import { Comment } from '../comment-model-front';


@Component({
    selector: 'app-customer-info',
    templateUrl: './customer-info.component.html',
    styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

    arrComments: Comment[] = new Array<Comment>();

    constructor(
        public dialogRef: MatDialogRef<CustomerInfoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private customerService: CustomerService,
        private commentService: CommentService) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
    }

    showComments(customerId) {
        this.commentService.getComments(customerId).subscribe((data: Comment[]) => {
            this.arrComments = data;
            console.log(this.arrComments);
        });
    }
}