import { Injectable, OnInit } from '@angular/core';
import { Customer } from './customer-model-front';
import { Comment } from './comment-model-front';
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
    }

    getComments(id): Observable<Comment[]> {
        return this.http.get<Comment[]>('/comment-api/' + id);
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