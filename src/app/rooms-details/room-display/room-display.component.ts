import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Room } from 'src/app/room.model';

@Component({
  selector: 'app-room-display',
  templateUrl: './room-display.component.html',
  styleUrls: ['./room-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomDisplayComponent implements OnInit,OnChanges {
   @Input("DiplayRoom") room!:Room;
   @Output() prevRoomEmiter:EventEmitter<Room> = new EventEmitter()
   msg!:string;
  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['room'] &&(!changes['room'].firstChange)){
     this.prevRoomEmiter.emit(changes['room'].previousValue);
    }
  }

}
