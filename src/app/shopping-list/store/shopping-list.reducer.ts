// import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Morvaldio', 5),
    new Ingredient('Taurian', 10),
    new Ingredient('Coriander', 30),
  ],
};

// NgRx will automatically send these 2 args
export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      // state.ingredients.push() // Totally not acceptable as you're not supposed to touch previous state(immutable) instead, copy to new object
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingToEdit = state.ingredients[action.payload.index];
      // ingToEdit.amount = action.payload.ingredient.amount; // not correct, since we should not overwrite the existing state
      const updatedIng = {
        ...ingToEdit,
        ...action.payload.ingredient,
      };
      const updatedIngs = [...state.ingredients];
      updatedIngs[action.payload.index] = updatedIng;
      return {
        ...state,
        ingredients: updatedIngs,
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const ingsAfterDeletion = [...state.ingredients];
      ingsAfterDeletion.splice(action.payload, 1);
      return {
        ...state,
        ingredients: ingsAfterDeletion,
      };

    default:
      return state;
  }
}
