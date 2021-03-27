import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServiceService } from '../service/recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  
  // @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor(private recipeServiceService: RecipeServiceService) { }

  ngOnInit(): void {
    this.recipes=this.recipeServiceService.getRecipeList()
  }

  // onRecipeSelected(selected: Recipe) {
  //   console.log(selected);
  //   this.recipeServiceService.selectedRecipe.emit(selected);
  //   // this.selectedRecipe.emit(selected);
  // }

}
