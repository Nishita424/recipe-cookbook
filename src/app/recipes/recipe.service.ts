import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test description',
      'https://images.pexels.com/photos/5200286/pexels-photo-5200286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [new Ingredient('Meat', 1), new Ingredient('Fish', 2)]
    ),
    new Recipe(
      'A test2 recipe',
      'This is another test description',
      'https://images.pexels.com/photos/5200286/pexels-photo-5200286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [new Ingredient('French fries', 20), new Ingredient('Fish fries', 20)]
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
}
