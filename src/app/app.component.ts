import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { AddFood, AddUser, FoodsState, RestaurantState } from './food/food.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Select(FoodsState.foods) foods$: Observable<any>;

  @Select(RestaurantState) restautant$: Observable<any>;
  
  constructor(private store: Store) {
    this.store.dispatch(new AddFood('Fire Rice'));

    setTimeout(() => {
      this.store.dispatch(new AddFood('Omelette')).pipe(
        withLatestFrom(this.foods$)
      ).subscribe(([foods]) => {
        // console.log(foods);
      });
    }, 3000);
  }

  getSnapshot() {
    const snap = this.store.snapshot();
  }

  getRestuarant() {
    this.store.dispatch(new AddUser('new user'));
  }
}
