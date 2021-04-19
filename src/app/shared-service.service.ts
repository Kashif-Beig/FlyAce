import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  from : BehaviorSubject<string> = new BehaviorSubject("");
  to : BehaviorSubject<string> = new BehaviorSubject("");
  trvdate : BehaviorSubject<Date> = new BehaviorSubject(null);
  returndate : BehaviorSubject<Date> = new BehaviorSubject(null);
  tripType : BehaviorSubject<number> = new BehaviorSubject(0);
  selectedFlight : BehaviorSubject<Flight> = new BehaviorSubject(null);
  RselectedFlight : BehaviorSubject<Flight> = new BehaviorSubject(null);
  constructor() { }
}
