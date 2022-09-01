import { Branch } from "./branch";

export class Admin {
    
        id!:number;
        aname!:string;
        aemail!:string;
        apass!:string;
        branch = new Branch();
 
        constructor(){}

        
}

 