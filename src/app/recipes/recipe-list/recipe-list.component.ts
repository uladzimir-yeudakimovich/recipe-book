import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Tast Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4vNSX33DN6WXK1GDhrmIbTLrgEg8jbJI3wzgWLBTurMqYnKA6'),
    new Recipe('A Tast Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4vNSX33DN6WXK1GDhrmIbTLrgEg8jbJI3wzgWLBTurMqYnKA6')
  ];

  constructor() { }

  ngOnInit() {
  }

}
