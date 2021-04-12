import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.css']
})
export class SelectSeatsComponent implements OnInit {

    rowSeats: Array<Seat[]> =[  
      [
        {row:1, letter : 'A', booked : false, check : false},
        {row:1, letter : 'B', booked : false, check : false},
        {row:1, letter : 'C', booked : false, check : false},
        {row:1, letter : 'D', booked : false, check : false},
      ],
      [
        {row:2, letter : 'A', booked : false, check : false},
        {row:2, letter : 'B', booked : false, check : false},
        {row:2, letter : 'C', booked : true, check : false},
        {row:2, letter : 'D', booked : false, check : false},
      ],
      [
        {row:3, letter : 'A', booked : true, check : false},
        {row:3, letter : 'B', booked : false, check : false},
        {row:3, letter : 'C', booked : false, check : false},
        {row:3, letter : 'D', booked : false, check : false},
      ],
      [
        {row:4, letter : 'A', booked : false, check : false},
        {row:4, letter : 'B', booked : false, check : false},
        {row:4, letter : 'C', booked : false, check : false},
        {row:4, letter : 'D', booked : true, check : false},
      ]
    ]  
  selectedSeats:string[] = new Array();
  maxSeats:number = 3;
  pickedSeats:number = 0;
    pickSeat(seat:Seat)
    {
      if(seat.check)
      {
        this.selectedSeats.splice(this.selectedSeats.indexOf((seat.row+seat.letter)), 1);
        seat.check=false;
        this.pickedSeats--;
      }
      else if(!seat.check && this.maxSeats> this.pickedSeats && !seat.booked)
      {
        this.selectedSeats.push(seat.row + seat.letter);
        seat.check=true;
        this.pickedSeats++;
      }
    }

    proceedToSeats()
    {
      if(this.pickedSeats===this.maxSeats)
      {
        console.log(this.selectedSeats);
        this.router.navigate(['/passengerDetails']);
      }
      else
      {
        alert("Please select all " +this.maxSeats + " seats")
      }
    }
  constructor(private router: Router) { } 

  ngOnInit(): void {
  }

}
export class Seat {  
  row : number;  
  letter : string;  
  booked : boolean;  
  check : boolean;  
} 
