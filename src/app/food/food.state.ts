import { State } from '@ngxs/store';
​
@State({
  name: 'todos',
  defaults: {
    pizzaForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class PizzaState {}
