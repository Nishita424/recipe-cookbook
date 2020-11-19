import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  // @Input() targetRecipe: Recipe;
  targetRecipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Not apt
    // const id = this.route.snapshot.params['id'];

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']; // casting string id from route to number
      this.targetRecipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addToShoppingList(this.targetRecipe.ingredients);
  }
}
