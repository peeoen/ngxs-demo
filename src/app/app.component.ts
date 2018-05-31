import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddFood, FoodsState } from './food/food.state';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Select(FoodsState) foods$: Observable<string>;

  constructor(private store: Store) {
    
  }

  addFood() {
    this.store.dispatch(new AddFood('fire rice'));
  }

}
