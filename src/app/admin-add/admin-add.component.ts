import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../admin';
import { AdminServiceService } from '../Services/admin-service.service';


@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

     constructor(private saveadmin:AdminServiceService){}

      admin = new Admin();
        

     ngOnInit(): void{

     }

     addAdmin(form:NgForm){
      console.log(form.value);
      console.log(this.admin);

      this.saveadmin.addAdmins(this.admin).subscribe((res)=>{
        console.log(res);
        
      })
      
     }
}



    
  


