export interface Room{
    totalRooms: number,
    bookedRooms: number,
    availableRooms: number
}

export interface RoomDetails{
    roomNumber: number,
    price: number,
    available: boolean,
    EvenOdd : string,
    checkinTime: Date,
    checkoutTime: Date
}