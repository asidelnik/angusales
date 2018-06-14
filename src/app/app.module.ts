import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';


import { AppComponent } from './app.component';
import { CustomerService } from './customer.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HeaderComponent,
        TableComponent
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
        MatPaginatorModule
    ],
    providers: [CustomerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
