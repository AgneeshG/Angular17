import { Component, OnInit, Input } from '@angular/core';
import { Room, RoomDetails } from './rooms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RoomslistComponent } from '../roomslist/roomslist.component';


@Component({
  selector: 'app-one',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit{
  hotelName = "Thaj Hotel"
  numOfRooms = 10
  @Input() hideRooms:boolean = false
  num: string = 'o'


  Rooms:Room = {
    totalRooms: 23,
    bookedRooms: 17,
    availableRooms: 6
  }
  @Input() roomDetails: RoomDetails[] = []
  // roomDetails: RoomDetails[] = [
  //   {
  //     roomNumber:101,
  //     price:5000,
  //     available:true,
  //     EvenOdd: 'o',
  //     checkinTime: new Date('15-MAY-2022'),
  //     checkoutTime: new Date('17-MAY-2022')
  // },
  // {
  //   roomNumber:102,
  //   price:5000,
  //   available:false,
  //   EvenOdd: 'e',
  //   checkinTime: new Date('14-MAY-2022'),
  //   checkoutTime: new Date('18-MAY-2022')
  // },
  // {
  //   roomNumber:103,
  //   price:5500,
  //   available:true,
  //   EvenOdd: 'o',
  //   checkinTime: new Date('16-MAY-2022'),
  //   checkoutTime: new Date('17-MAY-2022')
  // },
  // {
  //   roomNumber:104,
  //   price:6000,
  //   available:false,
  //   EvenOdd: 'e',
  //   checkinTime: new Date('15-MAY-2022'),
  //   checkoutTime: new Date('18-MAY-2022')
  // }]
  constructor(){}

  ngOnInit(): void {
    
  }
  toggle(){
    this.hideRooms = !this.hideRooms
  }
}

