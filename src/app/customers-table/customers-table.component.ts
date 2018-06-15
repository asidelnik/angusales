import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; // , 
import { Customer } from '../customer-model-front';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';

@Component({
    selector: 'app-customers-table',
    templateUrl: './customers-table.component.html',
    styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
    displayedColumns = ['id', 'firstName', 'lastName', 'company', 'phone'];
    // dataSource = ELEMENT_DATA;
    animal: string;
    name: string;
    @Input() customers: Customer[] = new Array<Customer>();

    constructor(public dialog: MatDialog) { }
    
    ngOnInit() { }

    openDialog(customer): void {
        console.log(customer);
        
        let dialogRef = this.dialog.open(CustomerInfoComponent, {
            data: customer,
            panelClass: 'custom-dialog-container'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}

// @Component({
//     selector: 'customer-info.component',
//     templateUrl: 'customer-info.component.html',
// })
// export class CustomerInfoComponent {
//     constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
// }







/*
openDialog(customer) {
        this.dialog.open(CustomerInfoComponent, {
            data: {
                animal: 'panda'
            }
        });
        console.log(customer);

    }


import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer-model-front';


@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
    displayedColumns = ['id', 'firstName', 'lastName', 'company', 'phone'];
    @Input() customers: Customer[] = new Array<Customer>();

    constructor() { }

    ngOnInit() { }

    openDialog() {
        console.log("openDialog method called");
    }
}
*/



 // openDialog(customer): void {
    //     // console.log(customer);        
    //     let dialogRef = this.dialog.open(CustomerInfoComponent, {
    //         width: '250px',
    //         data: customer
    //     });

    //     dialogRef.afterClosed().subscribe(result => {
    //         console.log('The dialog was closed');
    //         this.animal = result;
    //     });
    // }