import { Component, OnInit } from '@angular/core';
import { FoodProductService } from '../Services/food-product.service';

@Component({
  selector: 'app-display-food-product',
  templateUrl: './display-food-product.component.html',
  styleUrls: ['./display-food-product.component.css']
})
export class DisplayFoodProductComponent implements OnInit {
 // result:any;
  fparray:any;
  constructor(private foodProducts:FoodProductService) { }

  ngOnInit(): void {
      this.foodProducts.getFoodProduct().subscribe((data)=>{
        console.log(data);
        
        this.fparray=data;
        //this.fparray=this.result.t;
        console.log(this.fparray);
        
      })
  }

}
