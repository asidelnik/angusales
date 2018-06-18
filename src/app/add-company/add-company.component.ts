import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompanyService } from '../company.service';
import { Company } from '../company-model-front';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

    newCompany: Company = new Company();

    constructor(public dialogRef: MatDialogRef<AddCompanyComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private companyService: CompanyService) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() { }

    addCompany() {
        // this.newCustomer.company = companyName;
        this.companyService.addCompany(this.newCompany);
        this.dialogRef.close();
    }
}
