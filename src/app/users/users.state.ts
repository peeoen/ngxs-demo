import { Action, Selector, State, StateContext } from '@ngxs/store';

export class AddUser {
    static readonly type = '[User] Add User';
    constructor(public name: string) { }
}

export interface UserStateModel {
    users: string[];
}


@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})
export class UsersState {

    @Action(AddUser)
    addUsers(ctx: StateContext<UserStateModel>, action: AddUser) {
        const state = ctx.getState();
        ctx.patchState({
            users: [
                ...state.users,
                action.name
            ]
        });
    }

    // tslint:disable-next-line:member-ordering
    @Selector()
    static users(state: UserStateModel) {
        return state.users;
    }
}
