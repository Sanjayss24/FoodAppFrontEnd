import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchServiceService } from '../Services/branch-service.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(private branch:BranchServiceService) { }
 
  ngOnInit(): void {
  }
    addBranch(form:NgForm){
      this.branch.saveBranch(form.value).subscribe((res)=>{
        console.log(res);
        
      })
    }


}
