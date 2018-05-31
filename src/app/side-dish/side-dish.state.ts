import { Action, Selector, State, StateContext } from '@ngxs/store';

export class AddSideDish {
    static readonly type = '[SideDish] Add SideDish';
    constructor(public name: string) { }
}

export interface SideDishStateModel {
    sides: string[];
}



@State<string[]>({
    name: 'sides',
    defaults: [
        'default'
    ]
})
export class SideDishState {
    @Action(AddSideDish)
    addSide(ctx: StateContext<SideDishStateModel>, action: AddSideDish) {
        const state = ctx.getState();
        ctx.patchState({
            sides: [
                ...state.sides,
                action.name
            ]
        });
    }

    // tslint:disable-next-line:member-ordering
    @Selector()
    static sides(state: SideDishStateModel) {
      return state.sides;
    }
}
