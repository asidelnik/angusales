import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';


import { AppComponent } from './app.component';
import { CustomerService } from './customer.service';
import { CompanyService } from './company.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { CompaniesTableComponent } from './companies-table/companies-table.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddCompanyComponent } from './add-company/add-company.component';



@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HeaderComponent,
        CustomersTableComponent,
        CompaniesTableComponent,
        CustomerInfoComponent,
        AddCustomerComponent,
        AddCompanyComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatTabsModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatDialogModule,
        FormsModule,
        MatIconModule,
        MatInputModule
    ],
    entryComponents: [
        CustomerInfoComponent,
        AddCustomerComponent,
        AddCompanyComponent
    ],
    providers: [
        CustomerService,
        CompanyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }