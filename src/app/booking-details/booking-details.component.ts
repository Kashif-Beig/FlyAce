import { Component, OnInit } from '@angular/core';
import { PassengersDetail } from '../card-inputs';
import { Flight } from '../flight';
import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  constructor(private sharedService :SharedServiceService) { }
  selectedFlight: Flight;
  RselectedFlight: Flight;
  tripType = 0;
  totalAmount : number =0;
  economyPrice: number;
  businessPrice : number;
  ReconomyPrice: number;
  RbusinessPrice : number;
  passengersinfo : PassengersDetail[] = new Array;
  Rpassengersinfo : PassengersDetail[] = new Array;
  selectedSeatClass : string[] = new Array();
  RselectedSeatClass : string[] = new Array();
  ngOnInit(): void {
    this.sharedService.selectedFlight.subscribe((s)=>{
      this.selectedFlight = s;
    });

    this.sharedService.RselectedFlight.subscribe((s)=>{
      this.RselectedFlight = s;
    });

    this.sharedService.tripType.subscribe((fr)=>{
      this.tripType = fr;
    });

    this.sharedService.passengerinfo.subscribe(pas =>{
      this.passengersinfo = pas;
    });

    if(this.tripType==1)
    {
      this.sharedService.Rpassengerinfo.subscribe(pas =>{
        this.Rpassengersinfo = pas;
      });
      this.sharedService.RselectedSeatClass.subscribe(pas =>{
        this.RselectedSeatClass  = pas;
      });

      this.RselectedSeatClass.forEach(element => {
        if(element=="business")
        {
          this.totalAmount = this.totalAmount + this.RselectedFlight.Price_B;
        }
        else{
          this.totalAmount = this.totalAmount + this.RselectedFlight.Price_E;
        }
      });

    }

    this.sharedService.selectedSeatClass.subscribe(pas =>{
      this.selectedSeatClass  = pas;
    });

    this.selectedSeatClass.forEach(element => {
      if(element=="business")
      {
        this.totalAmount = this.totalAmount + this.selectedFlight.Price_B;
      }
      else{
        this.totalAmount = this.totalAmount + this.selectedFlight.Price_E;
      }
    });

  }
  

}
