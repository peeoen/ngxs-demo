import { Component } from '@angular/core';
import { Actions, Select, Store, ofActionSuccessful } from '@ngxs/store';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { AddFood, FoodsState } from './food/food.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Select(FoodsState.foods) foods$: Observable<any>;
  constructor(private store: Store,
  private action$: Actions) {
    this.store.dispatch(new AddFood('Fire Rice'));
    this.delayAddFood();
    this.action$.pipe(ofActionSuccessful(AddFood)).subscribe(() => {
      console.log('add food');
    });
  }

  private delayAddFood() {
    setTimeout(() => {
      this.store.dispatch(new AddFood('Omelette')).pipe(withLatestFrom(this.foods$)).subscribe(([foods]) => {
        // console.log(foods);
      });
    }, 3000);
  }

  getSnapshot() {
    const snap = this.store.snapshot();
  }
}
