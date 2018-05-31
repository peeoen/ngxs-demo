import { Action, Selector, State, StateContext } from '@ngxs/store';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
export class AddFood {
    static readonly type = '[Food] Add Food';
    constructor(public name: string) { }
}

export class GetFood {
    static readonly type = '[Food] Get Food';
}

export interface FoodStateModel {
    foods: string;
}

@State<FoodStateModel>({
    name: 'food',
    defaults: {
        foods: 'default'
    }
})
export class FoodsState {
    @Action(AddFood)
    addFoods(ctx: StateContext<FoodStateModel>, action: AddFood) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            foods: action.name
        });
    }

    @Action(GetFood, { cancelUncompleted: true})
    getFoods(ctx: StateContext<FoodStateModel>) {
        return of(ctx.getState()).pipe(
            tap(res => console.log(res)),
            delay(2000),
            tap((res) => {
                console.log(res);
                // ctx.setState(res);
            })
        );
    }


    // tslint:disable-next-line:member-ordering
    @Selector()
    static foods(state) {
      return state.foods;
    }
}
