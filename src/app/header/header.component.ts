import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Customer } from '../customer-model-front';
import { AddCompanyComponent } from '../add-company/add-company.component';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }

    addCompany(): void {
        let dialogRef = this.dialog.open(AddCompanyComponent, {
            // data: customer,
            panelClass: 'custom-dialog-container'
        });

        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
            console.log(result);
            // this.animal = result;
        });
    }
}
