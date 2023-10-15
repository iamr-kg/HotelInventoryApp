import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsDetailsComponent } from './rooms-details/rooms-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { RoomDisplayComponent } from './rooms-details/room-display/room-display.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { appConfig, appConfigToken } from './app.config';
import { RxjsLearnComponent } from './rxjs-learn/rxjs-learn.component';
@NgModule({
  declarations: [
    AppComponent,
    RoomsDetailsComponent,
    RoomDisplayComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeDetailsComponent,
    RxjsLearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:appConfigToken ,useValue:appConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
