import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators ,NgForm,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-admin-addflights',
  templateUrl: './admin-addflights.component.html',
  styleUrls: ['./admin-addflights.component.css']
})
export class AdminAddflightsComponent implements OnInit { 
  addflightsForm = new FormGroup({
    planename: new FormControl('',[Validators.required]),
    seats: new FormControl('',[Validators.required]),
    source: new FormControl('',[Validators.required]),
    destination: new FormControl('',[Validators.required]),
    dtime: new FormControl('',[Validators.required]),
    atime: new FormControl('',[Validators.required]),
    bprice: new FormControl('',[Validators.required]),
    eprice: new FormControl('',[Validators.required]), 
    days:new FormControl('',[Validators.required]),
  }) 

  constructor() { }

  ngOnInit(): void {
  } 

  get planename() {
    return this.addflightsForm.get('planename');
  } 
  get seats() {
    return this.addflightsForm.get('seats');
  } 
  get source() {
    return this.addflightsForm.get('source');
  } 
  get destination() {
    return this.addflightsForm.get('destination');
  } 
  get dtime() {
    return this.addflightsForm.get('dtime');
  } 
  get atime() {
    return this.addflightsForm.get('atime');
  } 
  get bprice() {
    return this.addflightsForm.get('bprice');
  } 
  get eprice() {
    return this.addflightsForm.get('eprice');
  } 
  onSubmit() {
    console.log(this.addflightsForm.value); 
  } 

}
