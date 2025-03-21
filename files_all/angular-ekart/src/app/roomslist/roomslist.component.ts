import { Component, OnInit } from '@angular/core';
import { Room, RoomDetails } from '../one/rooms';

@Component({
  selector: 'app-roomslist',
  standalone: true,
  imports: [],
  templateUrl: './roomslist.component.html',
  styleUrl: './roomslist.component.css'
})
export class RoomslistComponent implements OnInit {
  roomDetails: RoomDetails[] = []
  
  ngOnInit(): void {
    this.roomDetails = [
      {
        roomNumber:101,
        price:5000,
        available:true,
        EvenOdd: 'o',
        checkinTime: new Date('15-MAY-2022'),
        checkoutTime: new Date('17-MAY-2022')
    },
    {
      roomNumber:102,
      price:5000,
      available:false,
      EvenOdd: 'e',
      checkinTime: new Date('14-MAY-2022'),
      checkoutTime: new Date('18-MAY-2022')
    },
    {
      roomNumber:103,
      price:5500,
      available:true,
      EvenOdd: 'o',
      checkinTime: new Date('16-MAY-2022'),
      checkoutTime: new Date('17-MAY-2022')
    },
    {
      roomNumber:104,
      price:6000,
      available:false,
      EvenOdd: 'e',
      checkinTime: new Date('15-MAY-2022'),
      checkoutTime: new Date('18-MAY-2022')
    }
    ]
    console.log('Component initialized')

    
  }
}
