import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeServiceService } from '../../service/recipe-service.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeinput') recipe: Recipe = new Recipe('', '', '',[]);
  // @Output() selectedRecipeDetails = new EventEmitter<void>();

  constructor(private recipeServiceService: RecipeServiceService) { }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.recipeServiceService.selectedRecipe.emit(this.recipe)
  }

}
