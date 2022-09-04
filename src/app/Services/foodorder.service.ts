import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodOrderService {

  constructor(private http:HttpClient) { }

  saveFoodOrder(foodOrder:any){
    return this.http.post(`http://localhost:8080/api/savefo`,foodOrder)
  }

  getFoodOrder(){
    return this.http.get('http://localhost:8080/api/allfo');
  }

  updateFoodOrder(id:any,foodOrder:any){
   return this.http.put(`http://localhost:8080/api/updatefo/${id}`,foodOrder)
  }

  deletefo(id:any){
    return this.http.delete(`http://localhost:8080/api/deletefo/${id}`);
  }
}
