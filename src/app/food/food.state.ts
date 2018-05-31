import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';

export class AddFood {
    static readonly type = '[Food] Add Food';
    constructor(public name: string) { }
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
export class FoodsState implements NgxsOnInit {

    ngxsOnInit(ctx: StateContext<FoodStateModel>) {
        console.log('State initialized, now getting animals');
    }


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
        return state.foods;
    }
}
