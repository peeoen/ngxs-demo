import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { UsersState, AddUser } from '../users.state';
import { FoodsState } from '../../food/food.state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Select(UsersState.users) users$: Observable<any>;
  userName: string;

  @Select(FoodsState.foods) foods$: Observable<any>;
  constructor(private store: Store) { }

  ngOnInit() {

  }

  addUser() {
    this.store.dispatch(new AddUser(this.userName));
  }
}
