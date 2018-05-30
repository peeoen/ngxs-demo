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
  @Select(FoodsState.foods) foods$: Observable<any>;
  constructor(private store: Store) {
    this.store.dispatch(new AddFood('Fire egg'));
  }
}
