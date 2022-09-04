import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-display-menu',
  templateUrl: './display-menu.component.html',
  styleUrls: ['./display-menu.component.css']
})
export class DisplayMenuComponent implements OnInit {
   marray:any;
  constructor(private menu:MenuService) { }

  ngOnInit(): void {
    this.menu.getMenu().subscribe((Data)=>{
      console.log(Data);
      this.marray=Data;
      
    })
  }

}
