import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput', { static: true }) newIngName: ElementRef;
  // @ViewChild('amountInput', { static: true }) newIngAmount: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  // Or you could pass local references as args to this method instead of using @ViewChild
  onAddIngredient(
    nameInput: HTMLInputElement,
    amountInput: HTMLInputElement,
    e
  ) {
    // const ingName = this.newIngName.nativeElement.value;
    // const ingAmount = this.newIngAmount.nativeElement.value;
    // const newIngredient = new Ingredient(ingName, ingAmount);
    const newIngredient = new Ingredient(
      nameInput.value,
      amountInput.valueAsNumber
    );
    this.newIngredientAdded.emit(newIngredient);
    e.preventDefault();
  }
}
