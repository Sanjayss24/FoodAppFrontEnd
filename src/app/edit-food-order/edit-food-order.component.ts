import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FoodOrder } from '../food-order';
import { FoodOrderService } from '../Services/food-order.service';

@Component({
  selector: 'app-edit-food-order',
  templateUrl: './edit-food-order.component.html',
  styleUrls: ['./edit-food-order.component.css']
})
export class EditFoodOrderComponent implements OnInit {
  result:any;
  constructor(private food:FoodOrderService, private route:ActivatedRoute) { }
   foodOrder=new FoodOrder();

  ngOnInit(): void {
     this.food.getFoodOrder().subscribe((Data)=>{
      console.log(Data);
      this.result=Data;

      let id = this.route.snapshot.params['id'];

      for(let r of this.result){
        if(id==r.id){
          this.foodOrder=r;
          console.log(this.foodOrder);
          
        }
      }
      
     })  

  }

  updatefo(form:NgForm){
    this.food.updateFoodOrder(this.foodOrder.id,this.foodOrder).subscribe((Data)=>{
      console.log(Data);
      
    })
  }

}
