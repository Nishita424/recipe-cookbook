import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test description',
      'https://images.pexels.com/photos/5200286/pexels-photo-5200286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ),
    new Recipe(
      'A test2 recipe',
      'This is another test description',
      'https://images.pexels.com/photos/5200286/pexels-photo-5200286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ),
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    // This may allow outside components to change this array. So we will send a copy instead
    // return this.recipes;
    return this.recipes.slice();
  }

  constructor() {}
}
