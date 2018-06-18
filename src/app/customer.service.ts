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
    arrCustomersSubject: Subject<Customer[]> = new Subject<Customer[]>();
    arrCustomersObservable: Observable<Customer[]>;
    constructor(private http: HttpClient) {
        this.arrCustomersObservable = this.arrCustomersSubject.asObservable();
    }

    ngOnInit() { }

    getCustomers(): void{
        this.http.get<Customer[]>('/customer-api').subscribe((data)=>{
            this.arrCustomers = data;
            this.arrCustomersSubject.next(data);
        });
    }

    addCustomers(newCustomer): void {
        this.http.post<Customer>('/customer-api', newCustomer).subscribe((data) => {
            this.arrCustomers.push(data);
            this.arrCustomersSubject.next(this.arrCustomers);
        });
    }
    updateCustomers(newCustomer): void {
        this.http.put<Customer>('/customer-api/'+newCustomer.id, newCustomer).subscribe((data) => {
            //this.getCustomers();
            let index = this.arrCustomers.findIndex((curr)=> curr.id=newCustomer.id);
            this.arrCustomers[index] = data;
            this.arrCustomersSubject.next(this.arrCustomers);


            // this.arrCustomers.push(data);
            // this.arrCustomersSubject.next(this.arrCustomers);
        });
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