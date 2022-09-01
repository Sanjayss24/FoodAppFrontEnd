import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { FormsModule } from '@angular/forms';
import { AddBranchManagerComponent } from './add-branch-manager/add-branch-manager.component';
import { EditBranchmanagerComponent } from './edit-branchmanager/edit-branchmanager.component';
import { DisplayBranchmanagerComponent } from './display-branchmanager/display-branchmanager.component';
import { AddFoodorderComponent } from './add-foodorder/add-foodorder.component';
import { EditFoodorderComponent } from './edit-foodorder/edit-foodorder.component';
import { DisplayFoodorderComponent } from './display-foodorder/display-foodorder.component';

import { AddBranchComponent } from './add-branch/add-branch.component';

import { DisplayBranchComponent } from './display-branch/display-branch.component';
import { EditFoodProductComponent } from './edit-food-product/edit-food-product.component';
import { DisplayFoodProductComponent } from './display-food-product/display-food-product.component';
import { EditFoodOrderComponent } from './edit-food-order/edit-food-order.component';
import { DisplayFoodOrderComponent } from './display-food-order/display-food-order.component';
import { AddStaffComponent } from './add-staff/add-staff.component';

import { DisplayStaffComponent } from './display-staff/display-staff.component';
import { DisplayMenuComponent } from './display-menu/display-menu.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
FormsModule
@NgModule({
  declarations: [
    AppComponent,
    AdminAddComponent,
    AdminEditComponent,
    AdminDisplayComponent,
    AddBranchManagerComponent,
    EditBranchmanagerComponent,
    DisplayBranchmanagerComponent,
    AddFoodorderComponent,
    EditFoodorderComponent,
    DisplayFoodorderComponent,
    
    AddBranchComponent,

    DisplayBranchComponent,
    EditFoodProductComponent,
    DisplayFoodProductComponent,
    EditFoodOrderComponent,
    DisplayFoodOrderComponent,
    AddStaffComponent,

    DisplayStaffComponent,
    DisplayMenuComponent,
    EditBranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
