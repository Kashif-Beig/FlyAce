import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  PaymentForm = new FormGroup({
    CardType: new FormControl('',[Validators.required]),
    OwnerName: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
    CVV: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{4}$")]),
    cardNumber: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{12}$")]),
    expirationMonth: new FormControl('',[Validators.required]),
    expirationYear: new FormControl('',[Validators.required]),
   })

  constructor(
    public fb:FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.PaymentForm.valid)
    {
      console.log(this.PaymentForm.value);
      alert("Booked");
      this.router.navigate(['/']);
    }
    else
    {
      alert("Invalid Entry");
    }
  } 
  get CardType()
  {
    return this.PaymentForm.get('CardType');
  }
  get OwnerName()
  {
    return this.PaymentForm.get('OwnerName');
  }
  get CVV()
  {
    return this.PaymentForm.get('CVV');
  }
  get cardNumber()
  {
    return this.PaymentForm.get('cardNumber');
  }
  get expirationMonth()
  {
    return this.PaymentForm.get('expirationMonth');
  }
  get expirationYear()
  {
    return this.PaymentForm.get('expirationYear');
  }
}
