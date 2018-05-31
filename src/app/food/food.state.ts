import { Action, Selector, State, StateContext } from '@ngxs/store';

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
      return state.foods;
    }
}

export class AddUser {
    static readonly type = '[Restaurant] Add User';
    constructor(public name: string) { }
}


@State({
    name: 'restaurant'
})
export class RestaurantState extends FoodsState {
    @Action(AddUser)
    addUser(ctx: StateContext<any>, action: AddUser) {
        const state = ctx.getState();
        console.log(state);
        console.log(action);
    }
}
