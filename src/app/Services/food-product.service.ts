import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodProductService {

  constructor(private http:HttpClient) { }

 
  addFoodProducts(saveFoodProduct:any){
    return this.http.post(`http://localhost:8080/api/savefp`,saveFoodProduct);
  }

}
