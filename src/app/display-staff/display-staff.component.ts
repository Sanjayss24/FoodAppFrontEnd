import { Component, OnInit } from '@angular/core';
import { StaffService } from '../Services/staff.service';

@Component({
  selector: 'app-display-staff',
  templateUrl: './display-staff.component.html',
  styleUrls: ['./display-staff.component.css']
})
export class DisplayStaffComponent implements OnInit {
  sarray:any;
  constructor(private staffs:StaffService) { }

  ngOnInit(): void {

    this.staffs.getStaffs().subscribe((Data)=>{
        console.log(Data);
        
      this.sarray=Data;

    })
  }

}
