import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor() { }

  // Add your service methods here
  myMethod() {
    return 'Hello from MyService!';
  }
}
