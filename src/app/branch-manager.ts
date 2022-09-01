import { FoodProduct } from "./food-product";
import { Staff } from "./staff";
export class BranchManager {

    id!:number;
    bname!:string;
    bemail!:string;
    bpass!:string;
    constructor(){}

    foodProduct=new FoodProduct();
    staffs = new Staff();

}
