import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBranchManagerComponent } from './add-branch-manager/add-branch-manager.component';
import { AddFoodorderComponent } from './add-foodorder/add-foodorder.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { DeleteadminComponent } from './deleteadmin/deleteadmin.component';
import { DeletebmComponent } from './deletebm/deletebm.component';
import { DeletefoComponent } from './deletefo/deletefo.component';

import { DisplayBranchComponent } from './display-branch/display-branch.component';
import { DisplayBranchmanagerComponent } from './display-branchmanager/display-branchmanager.component';
import { DisplayFoodOrderComponent } from './display-food-order/display-food-order.component';
import { DisplayFoodProductComponent } from './display-food-product/display-food-product.component';
import { DisplayMenuComponent } from './display-menu/display-menu.component';
import { DisplayStaffComponent } from './display-staff/display-staff.component';
import { EditBranchmanagerComponent } from './edit-branchmanager/edit-branchmanager.component';
import { EditFoodOrderComponent } from './edit-food-order/edit-food-order.component';





const routes: Routes = [
  {path:"alladmin",component:AdminDisplayComponent},
  {path:"allbranch",component:DisplayBranchComponent},
  {path:"saveadmin",component:AdminAddComponent},
  {path:"allfp",component:DisplayFoodProductComponent},
  {path:"updateadmin/:id",component:AdminEditComponent},
  {path:"updatebm/:id",component:EditBranchmanagerComponent},
  {path:"updatefo/:id",component:EditFoodOrderComponent},
  {path:"deleteadmin/:id",component:DeleteadminComponent},
  {path:"deletebm/:id",component:DeletebmComponent},
  {path:"deletefo/:id",component:DeletefoComponent},
  {path:"menu",component:DisplayMenuComponent},
  {path:"allstaffs",component:DisplayStaffComponent},
  {path:"allfo",component:DisplayFoodOrderComponent},
  {path:"savefo",component:AddFoodorderComponent},
  {path:"allbm",component:DisplayBranchmanagerComponent},
  {path:"savebm",component:AddBranchManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
