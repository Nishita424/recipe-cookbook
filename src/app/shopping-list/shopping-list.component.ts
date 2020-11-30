import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[];
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  // private ingChangeSub: Subscription;
  // private ingsChangeSub: Subscription;
  // private ingsReducedSub: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.shoppingListService.getIngredients();

    // this.ingChangeSub = this.shoppingListService.newIngredientAdded.subscribe(
    //   (ingredient: Ingredient) => {
    //     this.ingredients.push(ingredient);
    //   }
    // );
    // this.ingsChangeSub = this.shoppingListService.newIngredientsAdded.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
    // this.ingsReducedSub = this.shoppingListService.ingsAfterDeletion.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditIngredient(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    // this.ingChangeSub.unsubscribe();
    // this.ingsChangeSub.unsubscribe();
    // this.ingsReducedSub.unsubscribe();
  }
}
