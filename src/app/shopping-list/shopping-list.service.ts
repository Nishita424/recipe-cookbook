import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Morvaldio', 5),
    new Ingredient('Taurian', 10),
  ];

  // @Output() newIngredientAdded = new EventEmitter<Ingredient>();
  // newIngredientAdded = new EventEmitter<Ingredient>();
  // newIngredientsAdded = new EventEmitter<Ingredient[]>();
  // Do not use @Output() for subject
  newIngredientAdded = new Subject<Ingredient>();
  newIngredientsAdded = new Subject<Ingredient[]>();

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // this.newIngredientAdded.emit(ingredient);
    this.newIngredientAdded.next(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    // downside: we will have to emit for each ingredient
    // ingredients.forEach((ingredient) => {
    //   this.addIngredient(ingredient);
    // });
    // or bulk insert and emition
    this.ingredients.push(...ingredients);
    this.newIngredientsAdded.next(this.ingredients.slice());
  }
}
