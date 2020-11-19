import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) newIngName: ElementRef;
  @ViewChild('amountInput', { static: false }) newIngAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  // Or you could pass local references as args to this method instead of using @ViewChild
  onAddIngredient(e: Event) {
    const ingName = this.newIngName.nativeElement.value;
    const ingAmount = this.newIngAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    this.shoppingListService.addIngredient(newIngredient);
    e.preventDefault();
  }
}
