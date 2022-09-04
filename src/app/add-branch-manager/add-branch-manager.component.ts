import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchManager } from '../branch-manager';



import { BranchmanagerService } from '../Services/branchmanager.service';

@Component({
  selector: 'app-add-branch-manager',
  templateUrl: './add-branch-manager.component.html',
  styleUrls: ['./add-branch-manager.component.css']
})
export class AddBranchManagerComponent implements OnInit {

  constructor(private saveBranchManager:BranchmanagerService) { }

  branchManager = new BranchManager

  ngOnInit(): void {
  }

  addBranchManager(form:NgForm){
    console.log(form.value);
    console.log(this.branchManager);
    
    this.saveBranchManager.addBranchManager(this.branchManager).subscribe((res)=>{
      console.log(res);
      
    }
    )
    
  }

  

}
