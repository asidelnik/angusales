import { Injectable, OnInit } from '@angular/core';
import { Comment } from './comment-model-front';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    // arrComments: Comment[] = new Array<Comment>();
    arrCommentSubject: Subject<Comment[]> = new Subject<Comment[]>();
    arrCommentObservable: Observable<Comment[]>;

    constructor(private http: HttpClient) {
        this.arrCommentObservable = this.arrCommentSubject.asObservable();
    }

    getComments(id): Observable<Comment[]> {
        return this.http.get<Comment[]>('/comment-api/' + id);
    }

    deleteCustomerComments(id) {
        return this.http.delete<Comment[]>('/comment-api/' + id);
        // .subscribe((data) => {
        //     console.log(data);
            
        //     // this.arrComments = data;
        //     // this.arrCommentSubject.next(this.arrComments);
        // })
    }
}