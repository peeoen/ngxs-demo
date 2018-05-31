import { Component } from '@angular/core';
import { Store } from '@ngxs/store';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private store: Store) {
 
  }

}
