import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import {FlightDetails} from './flight-details';
import {Schedule} from './schedule';
import { Flight } from './flight';
import {Registers} from './registers';
import {Logins} from './registers';
import {Ticket} from './ticket';
import {Seat} from './seat';
import {CardInputs} from './card-inputs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiServer = "http://localhost:51141//api";// /Admin
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  addFlight(details): Observable<FlightDetails>{
    return this.httpClient.post<FlightDetails>(this.apiServer + '/Admin/' ,JSON.stringify(details), this.httpOptions)
  }

  viewSchedule(): Observable<Schedule[]>{
    return this.httpClient.get<Schedule[]>(this.apiServer + '/Admin/')
  }

  deleteSchedule(id) : Observable<Schedule[]>{
    return this.httpClient.put<Schedule[]>(this.apiServer + '/Admin?scheduleId=' + id , this.httpOptions)
  }

  searchFlight(from, to, trvDate) : Observable<Flight[]>{
    return this.httpClient.get<Flight[]>(this.apiServer + '/Search?from=' +from+ '&to=' +to+ '&trvDate=' +trvDate)
  }

register(registers): Observable<Registers> {
    return this.httpClient.post<Registers>(this.apiServer + '/register/', JSON.stringify(registers), this.httpOptions)
}  
 
loginuser(Loginuser): Observable<Registers> {
  return this.httpClient.post<Registers>(this.apiServer + '/login/', JSON.stringify(Loginuser), this.httpOptions)
}

gettickets(email):Observable<Ticket[]>{
  //let param1=new HttpParams().set('email',"jeffb@gmail.com");
  return this.httpClient.get<Ticket[]>(this.apiServer + '/Tickets?email='+ email)
}

getSeats(scheduleId):Observable<Array<Seat[]>>{
  return this.httpClient.get<Array<Seat[]>>(this.apiServer + '/Search?scheduleId=' + scheduleId)
}

passengerandpayment(card): Observable<CardInputs>{
  return this.httpClient.post<CardInputs>(this.apiServer + '/Payment/'  , JSON.stringify(card)  ,this.httpOptions)
}

}
