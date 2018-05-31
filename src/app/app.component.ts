import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { AddFood } from './food/food.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Select(FoodsState.foods) foods$: Observable<any>;
  foods$: Observable<any>;

  constructor(private store: Store) {
    // this.store.dispatch(new AddFood('Fire Rice'));
    this.foods$ = this.store.select(state => state);

    setTimeout(() => {
      // this.store.dispatch(new AddFood('Omelette')).pipe(
      //   withLatestFrom(this.foods$)
      // ).subscribe(([foods]) => {
      //   // console.log(foods);
      // });
      this.store.dispatch(new AddFood('Fire Rice'));
    }, 3000);

  }

  getSnapshot() {
    const snap = this.store.snapshot();
  }
}
