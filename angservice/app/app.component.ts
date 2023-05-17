
import { Component } from '@angular/core';
import { MyService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private myService: MyService) { }

  // You can now use the service methods in your component
  ngOnInit() {
    const result = this.myService.myMethod();
    console.log(result);
  }
}
