import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../admin';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  result:any;
  constructor(private adminup:AdminServiceService,private route:ActivatedRoute) { }
  admin=new Admin();
  ngOnInit(): void {

    this.adminup.getAdmin().subscribe((data)=>{
      this.result=data;
      console.log(this.result);

      let id= this.route.snapshot.params['id'];


      for(let r of this.result.t){
        if (id==r.id){
          this.admin=r;
          console.log(this.admin);
        }
        }
      })
  }

  updateAdmin(form:NgForm){
    this.adminup.updateAdmin(this.admin.id,this.admin).subscribe((Data)=>{
      console.log(Data);
    })
  }

}
