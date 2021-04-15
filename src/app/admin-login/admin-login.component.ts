import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators ,NgForm,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminloginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    
  })

  constructor() { }

  ngOnInit(): void {
  }
  get email() {
    return this.adminloginForm.get('email');
  } 
  get password() {
    return this.adminloginForm.get('password');
  }

  onSubmit()
   {
    console.log(this.adminloginForm.value);
   }

}
