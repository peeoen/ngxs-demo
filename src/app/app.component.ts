import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Login, Logout } from './auth/auth.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  username: string;
  password: string;
  user$: Observable<any>;

  constructor(private store: Store) {
    this.user$ = this.store.select(state => state);
  }

  login() {
    this.store.dispatch(new Login({
      username: this.username,
      password: this.password
    }));
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
