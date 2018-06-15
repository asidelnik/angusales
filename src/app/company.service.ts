import { Injectable, OnInit } from '@angular/core';
import { Company } from './company-model-front';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService implements OnInit {

    constructor(private http: HttpClient) {

    }

    ngOnInit() { }

    getCustomers(): Observable<Company[]> {
        return this.http.get<Company[]>('/company-api');
        // Do I need to catch an error here? if occurs?
    }
}