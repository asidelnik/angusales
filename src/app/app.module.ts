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



@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HeaderComponent,
        CustomersTableComponent,
        CompaniesTableComponent,
        CustomerInfoComponent
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
        MatIconModule
    ],
    entryComponents: [
        CustomerInfoComponent
    ],
    providers: [
        CustomerService,
        CompanyService
        //,        { provide: MAT_DIALOG_DATA, useValue: { hasBackdrop: false } }
        //{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }