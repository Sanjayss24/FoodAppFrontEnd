import { Component, OnInit } from '@angular/core';
import { BranchServiceService } from '../Services/branch-service.service';

@Component({
  selector: 'app-display-branch',
  templateUrl: './display-branch.component.html',
  styleUrls: ['./display-branch.component.css']
})
export class DisplayBranchComponent implements OnInit {
  result:any;
  barray:any;
  constructor(private branch:BranchServiceService) { }

  ngOnInit(): void {
    this.branch.getBranch().subscribe((res)=>{
      this.result=res;
      this.barray=this.result.t;
      console.log(this.barray);
      
      
    })
  }

}
