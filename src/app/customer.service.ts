import { Injectable, OnInit } from '@angular/core';
import { Customer } from './customer-model-front';
import { Comment } from './comment-model-front';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CustomerService implements OnInit {

    public clientUpdated: Observable<any>;
    public clientSubject: Subject<any>;

    constructor(private http: HttpClient) {

        this.clientSubject = new Subject<any>();
        this.clientUpdated = this.clientSubject.asObservable();

    }

    ngOnInit() { }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>('/customer-api');
    }

    getComments(id): Observable<Comment[]> {
        return this.http.get<Comment[]>('/comment-api/' + id);
    }

    addCustomer(customer) {
       return this.http.post<Customer>('/customer-api', customer);
    }
}

/*
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