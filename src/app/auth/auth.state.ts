import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
export class AuthStateModel {
    token: string;
    username: string;
}

export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: { username: string, password: string }) { }
}

export class Logout {
    static readonly type = '[Auth] Logout';
}

@Injectable()
@State<AuthStateModel>({
    name: 'auth',
})
export class AuthState {

    @Selector()
    static token(state: AuthStateModel) { return state.token; }

    constructor(private authService: AuthService) {
        
    }

    @Action(Login)
    login({ patchState }: StateContext<AuthStateModel>, { payload: { username, password } }: Login) {
        return this.authService.login({ username, password }).pipe(tap((result: { token: string }) => {
            patchState({
                token: result.token,
                username: username
            });
        }));
    }

    @Action(Logout)
    logout({ setState, getState }: StateContext<AuthStateModel>) {
        const { token } = getState();
        return this.authService.logout(token).pipe(tap(() => {
            setState(null);
        }));
    }

}
