import { Injectable } from '@angular/core';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { AddFood } from './food/food.state';
​
@Injectable()
export class RouteHandler {
  constructor(private actions$: Actions) {
    this.actions$
      .pipe(ofActionDispatched(AddFood))
      .subscribe(({ payload }) => console.log(payload));
  }
}
