import { Injectable, Output, EventEmitter } from '@angular/core';
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
  newIngredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngredientAdded.emit(ingredient);
  }
}
