import { Component, Input, OnInit } from '@angular/core';
import { RecipeServiceService } from '../service/recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: any;
  constructor(private recipeServiceService: RecipeServiceService) { }

  ngOnInit(): void {
  }
  addIngredientsToShoppingList = () => {
    this.recipeServiceService.addToShoppingList(this.recipe.ingredients);
  }
}
