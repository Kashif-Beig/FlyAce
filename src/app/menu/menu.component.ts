import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  bookingForm = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    departDate: new FormControl('', Validators.required),
    returnDate: new FormControl({value :'',  disabled: true}, Validators.required),
    passengers: new FormControl('',[Validators.required, Validators.min(1)]),
    tripType: new  FormControl(0)
  });
  //to enable/disable returnDate based on checkbox
  returnDateEnable(){
    this.bookingForm.get('returnDate').enable() ;
  }
  returnDateDisEnable(){
    this.bookingForm.get('returnDate').disable() ;
  }

  onSubmit() {
    if(this.bookingForm.valid)
    {
      console.log(this.bookingForm.value);
      alert("Searching");
    }
    else
    {
      alert("Invalid Entry");
    }
  }

  loggedin()
  { 
    //this.UserName=localStorage.getItem("UserName");
    return localStorage.getItem("UserName");
  } 

  
  Username=localStorage.getItem("UserName");
  logout()
  {
    localStorage.clear();
    this.rtr.navigate(["Login"]);
  }

  constructor(private rtr: Router) { }

  ngOnInit(): void {
  }

}
