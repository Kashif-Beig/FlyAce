import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  PassengerForm = new FormGroup({
    SeatNo: new FormControl({value :'',  disabled: true},[Validators.required]),
    PassengerName: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
    Contact: new FormControl('',[Validators.required, Validators.pattern("[789]{1}[0-9]{9}$")]),
    Gender: new FormControl('',[Validators.required]),
    Type: new FormControl('',[Validators.required]),
    DOB: new FormControl('',[Validators.required]),
    DocType: new FormControl('',[Validators.required]),
    DocNo: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]*$")])
   })

  constructor(
    public fb:FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
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
get Type()
{
  return this.PassengerForm.get('Type');
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
onSubmit(){
  if(this.PassengerForm.valid)
  {
    console.log(this.PassengerForm.value);
    this.router.navigate(['/bookindDetails']);
  }
  else
  {
    alert("Invalid Entry");
  }
} 
}
