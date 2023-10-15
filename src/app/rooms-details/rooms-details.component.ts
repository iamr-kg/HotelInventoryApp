import { RoomsService } from './../services/rooms.service';

import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  OnInit,
  ViewChild,
  ViewContainerRef,
  OnChanges,
  SimpleChanges,
  Self,
  Optional,
  Host,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomsList } from '../room.model';
import { RoomDisplayComponent } from './room-display/room-display.component';
import { concat, forkJoin, fromEvent, map, merge, mergeAll, mergeMap, Observable, Observer, of, reduce, scan, Subject, timer } from 'rxjs';
import { Posts } from '../posts.model';

@Component({
  selector: 'app-rooms-details',
  templateUrl: './rooms-details.component.html',
  styleUrls: ['./rooms-details.component.css'],
  //providers: [RoomsService]
})
export class RoomsDetailsComponent implements OnInit, OnChanges,AfterViewInit{
  stream: Observable<string> = new Observable((observer) => {
    observer.next('Krishna'),
      observer.next('Pants'),
      observer.next('RCB'),
      observer.complete();
  });
  @ViewChild('button')button!:ElementRef;
  @ViewChild(RoomDisplayComponent) rdComponent!:RoomDisplayComponent;
  prevRoom!: Room;
  rooms!: Room[];
  addRooms$!: Observable<Posts>;
  rooms$!: Observable<Room[]>;
  allRooms!: RoomsList;
  selectedRoomType!: string;
  selectedRoom!: Room;
  posts: Posts[] = [];
  buttonClick$!:Observable<Room[]>;
  allRoom$ !:Observable<Room[]> ;

  constructor(@Host() private roomsService: RoomsService) {}
  ngAfterViewInit(): void {
    this.buttonClick$ = fromEvent(this.button.nativeElement, 'click').pipe(map(()=>{return<Room[]> [{ roomNo: "A101", roomType: "Standard", amenities: "wifi, Tv, Air Conditioning, Refrigrator", isAvailable: true, price: 2000, rating: 3.6 }]}));
    this.allRoom$ = timer(0).pipe(map(val=> concat(this.rooms$,this.buttonClick$).pipe(scan((acc,cur)=>[...acc,...cur]))),mergeAll());
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.rooms$ = this.roomsService.getRooms();
    // this.rooms$.subscribe((data)=>{
    //   console.log(data);
    // })
    this.stream.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {},
    });
  }
  addRoomsCLicked(){
   // this.rooms$=concat(this.rooms$,this.buttonClick$);
    this.rooms$.subscribe((data)=>{
      console.log(data);
    });
  }
  prevRoomEmmited(room: Room) {
    this.prevRoom = room;
  }
  roomSelect(room: Room) {
    this.selectedRoom = room;
    this.rdComponent.room = this.selectedRoom;
  }
  addPost() {
    let newPost: Posts = {
      userId: 7,
      id: 101,
      title: 'the threasurus of health',
      body: 'some latin shit',
    };
    let added = this.roomsService.addPost(newPost).subscribe();
  }
}
