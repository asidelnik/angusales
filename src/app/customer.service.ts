import { Injectable, OnInit } from '@angular/core';
import { Customer } from './customer-model-front';
import { Comment } from './comment-model-front';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CustomerService implements OnInit {

    arrCustomers: Customer[] = new Array<Customer>();
    public customersSubject: Subject<any>;
    public customersUpdated: Observable<any>;

    constructor(private http: HttpClient) {

        this.customersSubject = new Subject<any>();
        this.customersUpdated = this.customersSubject.asObservable();

    }

    ngOnInit() { }

    getCustomers(): void {
        this.http.get<any[]>('/customer-api').subscribe((data) => {
            this.arrCustomers = data;
            this.customersSubject.next(this.arrCustomers);
        })
    }

    addCustomer(customer: Customer) {
        this.http.post<any[]>('/customer-api', customer).subscribe((data) => {
            this.arrCustomers = data;
            this.customersSubject.next(this.arrCustomers);
        })
    }

    deleteCustomer(id) {
        this.http.delete<any>('/customer-api/' + id).subscribe((data) => {
            this.arrCustomers = data;
            this.customersSubject.next(this.arrCustomers);
        })
    }
}




/*
console.log("service getCustomers data:");
            console.log(data);
        console.log("service getCustomers running");


    Subjects in service
    Get, add, edit, delete custoemrs, call next on subject
    Nav bar subscirbes to updated observable
*/



// console.log("service - customer:");
        // console.log(customer);
        // Upon customer adition, should I restart browser or add to local array?
        // Or maybe, the Oninit rerenders it anyway?


// async getPosts() {
    //     try {
    //         let dbPosts = await $.get('/posts');
    //         this.posts = dbPosts;
    //         return dbPosts;
    //     } catch (err) {
    //         alert(err);
    //     }
    // }