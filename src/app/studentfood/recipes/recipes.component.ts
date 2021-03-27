import { Component, OnInit, ViewChild } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeServiceService } from './service/recipe-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRes: any;
  // @ViewChild('infoText', { static: true }) infoText:any;
  constructor(private recipeServiceService: RecipeServiceService) { }

  ngOnInit(): void {
    this.recipeServiceService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.selectedRes = recipe;
    })
  }

}
