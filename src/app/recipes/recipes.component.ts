import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  recipeRequested: Recipe;

  constructor() {}

  ngOnInit(): void {}

  fetchRecipeDetails(recipe: Recipe) {
    this.recipeRequested = recipe;
  }
}
