//import { environment } from './../environments/environment.prod';
import { InjectionToken } from "@angular/core";
import {environment} from "../environments/environment"

export interface AppConfig{
  apiPath:string;
production:boolean
}

export const appConfigToken = new InjectionToken<AppConfig>("app.config");

export const appConfig:AppConfig = {
    apiPath:'http:hotelapp/api/v1',
    production: environment.production
}

