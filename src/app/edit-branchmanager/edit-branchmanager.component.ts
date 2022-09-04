import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BranchManager } from '../branch-manager';
import { BranchmanagerService } from '../Services/branchmanager.service';

@Component({
  selector: 'app-edit-branchmanager',
  templateUrl: './edit-branchmanager.component.html',
  styleUrls: ['./edit-branchmanager.component.css']
})
export class EditBranchmanagerComponent implements OnInit {
  result:any;
  constructor(private bmservice:BranchmanagerService, private route:ActivatedRoute) { }
 branchManager=new BranchManager();
  ngOnInit(): void {
    this.bmservice.getBranchManager().subscribe((data)=>{
      this.result=data;
      console.log(this.result);

      let id= this.route.snapshot.params['id'];


      for(let r of this.result.t){
        if (id==r.id){
          this.branchManager=r;
          console.log(this.branchManager);
        }
        }
      })
    
 }
 updatebm(form:NgForm){
  this.bmservice.updateBranchManager(this.branchManager.id,this.branchManager).subscribe((Data)=>{
    console.log(Data);
  })
}



}
