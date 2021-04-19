import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { PassengersDetail } from '../card-inputs';
import { Flight } from '../flight';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  Passengers : PassengersDetail[] = new Array;
  selectedFlight: Flight;

  PassengerForm = new FormGroup({
    SeatNo: new FormControl({value :'',  disabled: true},[Validators.required]),
    PassengerName: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
    Contact: new FormControl('',[Validators.required, Validators.pattern("[789]{1}[0-9]{9}$")]),
    Gender: new FormControl('',[Validators.required]),
    PassengerType: new FormControl('',[Validators.required]),
    DOB: new FormControl('',[Validators.required]),
    DocType: new FormControl('',[Validators.required]),
    DocNo: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]*$")])
   })

  constructor(
    public fb:FormBuilder,
    private router: Router,
    private sharedService : SharedServiceService
    ) { }

    tripType = 0;
    seatNos: string[] = new Array();
    RseatNos: string[] = new Array();
    from:string;
    to:string;

  ngOnInit(): void {

    this.sharedService.tripType.subscribe((fr)=>{
      this.tripType = fr;
    });

    this.sharedService.selectedSeatNos.subscribe((fr)=>{
      this.seatNos = fr;
    });

    if(this.tripType==1)
    {
      this.sharedService.RselectedSeatNos.subscribe((fr)=>{
        this.RseatNos = fr;
      });
    }

    this.sharedService.from.subscribe((fr)=>{
      this.from = fr;
    });
    this.sharedService.to.subscribe((to)=>{
      this.to = to;
    });

    this.sharedService.selectedFlight.subscribe((s)=>{
      this.selectedFlight = s;
    });

  }

  get SeatNo()
  {
    return this.PassengerForm.get('SeatNo');
  }
  get PassengerName()
{
  return this.PassengerForm.get('PassengerName');
}
get Contact()
{
  return this.PassengerForm.get('Contact');

}
get Gender()
{
  return this.PassengerForm.get('Gender');
}
get PassengerType()
{
  return this.PassengerForm.get('PassengerType');
}
get DOB()
{
  return this.PassengerForm.get('DOB');
}
get DocType()
{
  return this.PassengerForm.get('DocType');
}
get DocNo()
{
  return this.PassengerForm.get('DocNo');
}
// onSubmit(){
//   if(this.PassengerForm.valid)
//   {
//     console.log(this.PassengerForm.value);
//     this.router.navigate(['/bookindDetails']);
//   }
//   else
//   {
//     alert("Invalid Entry");
//   }
// } 

onSubmit(s : string, i : number ){
  if(this.PassengerForm.valid)
  {
    this.Passengers.push(this.PassengerForm.value)
    this.Passengers[i].seatNo = s;
    this.Passengers[i].Schedule_Id = this.selectedFlight.Schedule_Id;
    console.log(this.Passengers);
    if(this.Passengers.length === 3)
    {
      this.sharedService.passengerinfo.next(this.Passengers);
      this.router.navigate(['/payment']);
    }
} 
else
  {
    alert("Invalid Entry");
  }

}


}