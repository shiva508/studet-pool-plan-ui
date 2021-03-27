import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'Data description',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/12/healthy-breakfast-pizzas.jpg?resize=1024%2C750&ssl=1',
      []),
    new Recipe('D Test Recipe', 'Data description', 'http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg',[])
  ];
  getRecipeList = () => {
    return this.recipes.slice();
  }

}
