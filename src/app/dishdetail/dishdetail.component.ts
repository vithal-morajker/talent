import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component'
import { Dish } from '../shared/dish';

import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
//import { DISHES } from '../shared/dishes'

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish:Dish;
  //dishes=DISHES;
 // selectedDishes=DISHES[0];
  constructor(private dishservice:DishService,private route:ActivatedRoute,private location:Location) { }

  ngOnInit() {

    let id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);

  }

  goBack():void{

    this.location.back();
  }
}
