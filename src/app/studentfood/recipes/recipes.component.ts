import { Component, OnInit, ViewChild } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRes: any;
  // @ViewChild('infoText', { static: true }) infoText:any;
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected() {
    
  }
}
