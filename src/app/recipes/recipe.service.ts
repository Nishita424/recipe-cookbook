import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheese Burger',
      'King size burger with extra cheese and spice',
      'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [new Ingredient('Chicken', 2), new Ingredient('Tomatoes', 4)]
    ),
    new Recipe(
      'French Fries',
      'Trendy french fries',
      'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      [new Ingredient('Potatoes', 10), new Ingredient('Tomato sauce', 7)]
    ),
    new Recipe(
      'Mushroom Pasta',
      'Cheesy veg pasta with white sauce',
      'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [new Ingredient('Mushroom', 10), new Ingredient('Raw pasta', 20)]
    ),
  ];

  getRecipes() {
    // This may allow outside components to change this array. So we will send a copy instead
    // return this.recipes;
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  constructor(private sLService: ShoppingListService) {}

  addToShoppingList(ingredients: Ingredient[]) {
    this.sLService.addIngredients(ingredients);
  }

  removeFromShoppingList(ingredients: Ingredient[]) {
    this.sLService.removeIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
