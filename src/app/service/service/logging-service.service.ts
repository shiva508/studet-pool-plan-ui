import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }

  logStatusChanges = (status: string)=>{
    console.log("status changes:"+status)
  }
}
