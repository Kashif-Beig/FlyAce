import { Component, OnInit } from '@angular/core';

import {ApiService} from '../api.service';
import {Ticket} from '../ticket';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  constructor(public apiService : ApiService) { }
  email:string;
  Tickets : Ticket[];

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.apiService.gettickets(this.email)
    .subscribe
     (
     (data:Ticket[])=>
     { 
       this.Tickets=data;
       console.log(data);
     }
     );
  }

}
