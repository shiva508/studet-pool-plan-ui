import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingServiceService } from '../service/shopping-service.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() addIngredientObject = new EventEmitter<Ingredients>();
  
  @ViewChild('nameInput', { static: true }) nameInput: any;
  @ViewChild('amountInput', { static: true }) amountInput: any;

  constructor(private shoppingServiceService: ShoppingServiceService) { }

  ngOnInit(): void {

  }

  addIngredient = () => {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    // this.addIngredientObject.emit(new Ingredients(name, amount))
    console.log(new Ingredients(name, amount))
    this.shoppingServiceService.addNewIngredient(new Ingredients(name, amount))
    
  }


}
