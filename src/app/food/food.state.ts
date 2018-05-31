import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SideDishState } from './../side-dish/side-dish.state';

export class AddFood {
    static readonly type = '[Food] Add Food';
    constructor(public name: string) { }
}

export interface FoodStateModel {
    foods: string;
    sides?: string[];
}

@State<FoodStateModel>({
    name: 'food',
    defaults: {
        foods: 'default',
    },
    children: [
        SideDishState
    ]
})
export class FoodsState {
    @Action(AddFood)
    addFoods(ctx: StateContext<FoodStateModel>, action: AddFood) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            foods: action.name,
            sides: [
                'new 1'
            ]
        });
    }

    // tslint:disable-next-line:member-ordering
    @Selector()
    static foods(state) {
      return state.foods;
    }
}
