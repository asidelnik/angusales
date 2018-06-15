import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-customer-info',
    templateUrl: './customer-info.component.html',
    styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<CustomerInfoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
    }

}