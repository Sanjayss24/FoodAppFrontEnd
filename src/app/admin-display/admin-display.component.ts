import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit {
  result:any;
  adminArray:any;
  
  constructor(private admins:AdminServiceService) { }

  ngOnInit(): void {
    this.admins.getAdmin().subscribe((data)=>{
      this.result=data;
      this.adminArray=this.result.t;
      console.log(this.adminArray);
      
    })
  }

}
