import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  ingredients: Ingredients[] = [
    new Ingredients('Mango', 8),
    new Ingredients('Sapota', 408)
  ];
  constructor() { }
 

  getIngredientList =()=>{
    return this.ingredients;
  }
  addNewIngredient(ingredient: Ingredients){
    this.ingredients.push(ingredient);
    console.log(this.ingredients)
    this.ingredientsChanged.emit(this.ingredients);
  }

}
