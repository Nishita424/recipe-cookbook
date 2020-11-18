import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipeForDetails: Recipe;

  constructor() {}

  ngOnInit(): void {}

  fetchRecipeDetails(recipe: Recipe) {
    this.recipeForDetails = recipe;
  }
}
