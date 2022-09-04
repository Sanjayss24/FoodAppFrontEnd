import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from '../Services/food-order.service';


@Component({
  selector: 'app-display-food-order',
  templateUrl: './display-food-order.component.html',
  styleUrls: ['./display-food-order.component.css']
})
export class DisplayFoodOrderComponent implements OnInit {
  foarray:any;
  constructor(private foodOrders:FoodOrderService) { }

  ngOnInit(): void {
  this.foodOrders.getFoodOrder().subscribe((Data)=>{
    console.log(Data);
    this.foarray=Data;
    
  })

}
}
