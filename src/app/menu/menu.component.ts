import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

//Importing directly the DISHES constant.
//import { DISHES } from '../shared/dishes'

//Importing the DISHES constant using the service.
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes : Dish[];
  selectedDishes:Dish;

  constructor(private dishService:DishService) {
   }
  ngOnInit() {
    this.dishes=this.dishService.getDishes();
  }
  onSelect(dish:Dish)
  {

    this.selectedDishes=dish;
  }


}
