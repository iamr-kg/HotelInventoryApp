import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room, RoomsList } from '../room.model';
import { Posts } from '../posts.model';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }
  rooms: Observable<Room[]> = new Observable((observer => {
    observer.next([{ roomNo: "A101", roomType: "Standard", amenities: "wifi, Tv, Air Conditioning, Refrigrator", isAvailable: true, price: 2000, rating: 3.6 }, { roomNo: "B101", roomType: "Delux", amenities: "wifi, Tv, Air COndtitioning, Refrigrator, Private Washroom", isAvailable: true, price: 3000, rating: 4.6 }, { roomNo: "C101", roomType: "Suite", amenities: "Extra Space, 24-7 servicewifi, Tv, Air Conditioning, Refrigrator", isAvailable: true, price: 3400, rating: 4.2 }
    ]),
  observer.complete() }
  ))
  
  getRooms(): Observable<Room[]> {
    return this.rooms;
  }

  getPosts(): Observable<Posts> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return (<Observable<Posts>>this.http.get(url))
  }
  addPost(data: Posts): Observable<Posts> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.post(url, data) as Observable<Posts>;
  }
}
