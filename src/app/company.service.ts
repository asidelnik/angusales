import { Injectable, OnInit } from '@angular/core';
import { Company } from './company-model-front';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService implements OnInit {

    public companiesSubject: Subject<any>;
    public companiesUpdated: Observable<any>;
    companies = [];

    constructor(private http: HttpClient) {

        this.companiesSubject = new Subject<any>();
        this.companiesUpdated = this.companiesSubject.asObservable();

    }

    ngOnInit() { }

    getCompanies(): void {
        this.http.get<any[]>('/company-api').subscribe((data) => {
            this.companies = data;
            this.companiesSubject.next(this.companies);
        })
    }

    addCompany(company) {
        this.http.post<any[]>('/company-api', company).subscribe((data) => {
            this.companies = data;
            this.companiesSubject.next(this.companies);
        })
    }
}