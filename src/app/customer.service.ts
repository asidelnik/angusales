import { Injectable } from '@angular/core';
import { Customer } from './customer-model-front';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
}

// get data from get request - as a subject
// subscribe to data at the table