import { Component, OnInit } from '@angular/core';
import { Ingredints } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredints[] = [
    new Ingredints('Apples', 5),
    new Ingredints('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
