import { Action } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';

const initialState = {
  ingredients: [
    new Ingredient('Morvaldio', 5),
    new Ingredient('Taurian', 10),
    new Ingredient('Coriander', 30),
  ],
};

// NgRx will automatically send these 2 args
export function shoppingListReduces(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      // state.ingredients.push() // Totally not acceptable as you're not supposed to touch previous state(immutable) instead, copy to new object
      return {
        ...state,
        ingredients: [...state.ingredients, action],
      };
  }
}
