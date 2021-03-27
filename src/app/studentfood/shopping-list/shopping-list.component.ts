import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingServiceService } from './service/shopping-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredients[] = [
  //   new Ingredients('Mango', 8),
  //   new Ingredients('Sapota',408)
  // ];
  ingredients: Ingredients[]=[];

  constructor(private shoppingServiceService: ShoppingServiceService) {
    console.log("shopping");
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingServiceService.ingredients;
    this.shoppingServiceService.ingredientsChanged.subscribe((ingredientList: Ingredients[]) => {
      console.log(ingredientList)
      this.ingredients = ingredientList;
    })
  }

}
