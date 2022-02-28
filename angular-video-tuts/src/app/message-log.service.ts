import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageLogService {

  constructor() { }

  logMessage(msg: string) {
    console.log(msg)
  }
}
