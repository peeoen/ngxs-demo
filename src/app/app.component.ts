import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pizzaForm = this.formBuilder.group({
    toppings: ['', Validators.required]
  });

  pizza$: Observable<any>;
​
  constructor(private formBuilder: FormBuilder,
  private store: Store) {
    this.pizza$ = this.store.select(state => state);
  }
​
  onSubmit() {
    //
  }

}
