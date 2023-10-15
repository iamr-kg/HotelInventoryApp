export interface Room {
  roomNo: string;
  roomType: string;
  amenities: string;
  isAvailable: boolean;
  price: number;
  rating: number;
}

export interface RoomsList {
  room: Room[];
  totalAvailable: number;
  totalBooked: number;
}
