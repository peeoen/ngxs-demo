import { Action, Selector, State, StateContext } from '@ngxs/store';

export class AddFood {
    static readonly type = '[Food] Add Food';
    constructor(public name: string) { }
}

export interface FoodStateModel {
    foods: string;
}

@State<string>({
    name: 'food',
    defaults: ''
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

    // tslint:disable-next-line:member-ordering
    @Selector()
    static foods(state) {
        console.log(state);
      return state.foods;
    }
}
