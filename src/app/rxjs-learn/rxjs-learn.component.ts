import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.css']
})
export class RxjsLearnComponent implements OnInit,AfterViewInit{
  students:Observable<String[]> = of(["john","colby","devmanju"]);
  constructor() { }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {

  }



}
