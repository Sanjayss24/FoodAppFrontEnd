import { Component, OnInit } from '@angular/core';
import { BranchmanagerService } from '../Services/branchmanager.service';

@Component({
  selector: 'app-display-branchmanager',
  templateUrl: './display-branchmanager.component.html',
  
  styleUrls: ['./display-branchmanager.component.css']
})
export class DisplayBranchmanagerComponent implements OnInit {
result:any;
bmarray:any;

  constructor(private bms:BranchmanagerService) { }

  ngOnInit(): void {
    this.bms.getBranchManager().subscribe((data)=>{
      this.result=data;
      this.bmarray=this.result.t;
      console.log(this.bmarray);
     
      
    })
  }

}
