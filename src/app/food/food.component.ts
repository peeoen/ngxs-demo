import { UsersState } from './../users/users.state';
import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FoodsState } from './food.state';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  @Select(FoodsState.foods) foods$: Observable<any>;
  @Select(UsersState.users) users$: Observable<any>;
  constructor() { }

  ngOnInit() {
  }

}
