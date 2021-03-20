import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Mango', 8),
    new Ingredients('Sapota',408)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addNewIngredient = (ingredientObj:Ingredients) => {
    this.ingredients.push(ingredientObj);
  }

}
