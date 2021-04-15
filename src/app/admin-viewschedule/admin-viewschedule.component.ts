import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-admin-viewschedule',
  templateUrl: './admin-viewschedule.component.html',
  styleUrls: ['./admin-viewschedule.component.css']
})
export class AdminViewscheduleComponent implements OnInit {
  @ViewChild('closebutton') closebutton;

  constructor() { }

  ngOnInit(): void {
  }

}
