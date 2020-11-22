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
    new Ingredient('Coriander', 30),
  ];

  // @Output() newIngredientAdded = new EventEmitter<Ingredient>();
  // newIngredientAdded = new EventEmitter<Ingredient>();
  // newIngredientsAdded = new EventEmitter<Ingredient[]>();
  // Do not use @Output() for subject
  newIngredientAdded = new Subject<Ingredient>();
  newIngredientsAdded = new Subject<Ingredient[]>();
  ingsAfterDeletion = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();

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

  removeIngredients(ingredients: Ingredient[]) {
    const indx = this.ingredients.indexOf(ingredients[0]);
    this.ingredients.splice(indx, ingredients.length);
    this.ingsAfterDeletion.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingsAfterDeletion.next(this.ingredients.slice());
  }

  updateIngredient(ingredient: Ingredient, index: number) {
    this.ingredients[index] = ingredient;
    this.newIngredientsAdded.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }
}
