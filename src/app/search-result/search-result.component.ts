import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  tripType = 0;
  trip:boolean = true;
  changeTrip(t:boolean)
  {
    this.trip = t;
  }
  details:boolean = false;
  showDetails()
  {
    this.details = !this.details;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
