import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodOrder } from '../food-order';
import { FoodOrderService } from '../Services/food-order.service';

@Component({
  selector: 'app-add-foodorder',
  templateUrl: './add-foodorder.component.html',
  styleUrls: ['./add-foodorder.component.css']
})
export class AddFoodorderComponent implements OnInit {

 

  constructor(private foodOrderService:FoodOrderService) { }
  
  foodOrder = new FoodOrder();
  

  ngOnInit(): void {
  }
   addFoodOrder(form:NgForm){
    console.log(form.value);
    console.log(this.foodOrder);
    

    this.foodOrderService.saveFoodOrder(this.foodOrder).subscribe((res)=>{
      console.log(res);
      
    })

   }
}
