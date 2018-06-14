import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent {
    displayedColumns = ['id', 'firstName', 'lastName', 'company', 'phone'];
    dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
    id: number;
    firstName: string;
    lastName: string;
    company: string;
    phone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { id: 1, firstName: 'Hydrogen', lastName: 'Hydrogen', company: 'Wix', phone: 'Wix'},
    { id: 2, firstName: 'Helium', lastName: 'Helium', company: 'Check Point', phone: 'Wix'},
    { id: 3, firstName: 'Lithium', lastName: 'Lithium', company: 'Similar Web', phone: 'Wix'},
    { id: 4, firstName: 'Beryllium', lastName: 'Hydrogen', company: 'Wix', phone: 'Wix'},
    { id: 5, firstName: 'Boron', lastName: 'Helium', company: 'Check Point', phone: 'Wix'},
    { id: 6, firstName: 'Carbon', lastName: 'Lithium', company: 'Similar Web', phone: 'Wix'},
    { id: 7, firstName: 'Nitrogen', lastName: 'Hydrogen', company: 'Wix', phone: 'Wix'},
    { id: 8, firstName: 'Oxygen', lastName: 'Helium', company: 'Check Point', phone: 'Wix'},
    { id: 9, firstName: 'Fluorine', lastName: 'Lithium', company: 'Similar Web', phone: 'Wix'}
];





/*

export class TableComponent implements OnInit {
    displayedColumns = ['id', 'First name', 'Last name', 'Company', 'Phone'];
    // displayedColumns = ['id', 'name', 'progress', 'color'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        // Create 100 users
        const users: UserData[] = [];
        for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

// Builds and returns a new User.
function createNewCustomer(id: number): UserData {
    const firstName =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
        id: id.toString(),
        firstName: firstName,
        progress: Math.round(Math.random() * 100).toString(),
        //color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}

// Constants used to fill up our data base.
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
    id: string;
    firstName: string;
    lastName: string;
    company: string;
    phone: string;
}

*/





/*

@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.css'],
  templateUrl: 'table-overview-example.html',
})
export class TableComponent implements OnInit {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

// Builds and returns a new User.
function createNewUser(id: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}

// Constants used to fill up our data base.
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}

*/