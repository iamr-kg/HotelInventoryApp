import { RoomsService } from './../services/rooms.service';
import { HeaderComponent } from './../header/header.component';
import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers:[RoomsService]
})
export class ContainerComponent implements OnInit,AfterContentInit {
  @ContentChild(HeaderComponent) header!:HeaderComponent;

  constructor() { }
  ngAfterContentInit(): void {
    this.header.hotelName = "JW Marriot";
  }

  ngOnInit(): void {
  }

}
