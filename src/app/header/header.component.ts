import { Component, Input, OnInit, ChangeDetectionStrategy, } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection :ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() hotelName!:string;
  constructor() { }

  ngOnInit(): void {

  }

}
