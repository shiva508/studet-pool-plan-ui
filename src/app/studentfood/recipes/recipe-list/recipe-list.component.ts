import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Data description', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/12/healthy-breakfast-pizzas.jpg?resize=1024%2C750&ssl=1'),
    new Recipe('D Test Recipe', 'Data description', 'http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(selected: Recipe) {
    console.log(selected);
    this.selectedRecipe.emit(selected);
  }

}
