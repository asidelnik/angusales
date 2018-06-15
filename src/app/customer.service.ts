import { Injectable, OnInit } from '@angular/core';
import { Customer } from './customer-model-front';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CustomerService implements OnInit {

    constructor(private http: HttpClient) {

    }

    ngOnInit() { }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>('/customer-api');
        // Do I need to catch an error here? if occurs?
    }
}




// async getPosts() {
    //     try {
    //         let dbPosts = await $.get('/posts');
    //         this.posts = dbPosts;
    //         return dbPosts;
    //     } catch (err) {
    //         alert(err);
    //     }
    // }