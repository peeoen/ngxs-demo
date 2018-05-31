import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    login(payload: { username: string, password: string }): Observable<any> {
        if (payload.username.toLowerCase() === 'admin' && payload.password.toLowerCase() === '1234') {
            return of({token: 'new token'});
        }
        return throwError('error');
    }

    logout(token): Observable<any> {
        return of(null);
    }
}
