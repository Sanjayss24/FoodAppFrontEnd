
import { Items } from "./items";
export class FoodOrder 
{
    id!:number;
    orderTime!:string;
    customerName!:string;
    mobileNumber!:string;
    totalPrice!:number;
    items = new Items();
    constructor(){}
}
