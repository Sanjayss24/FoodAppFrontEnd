import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBranchManagerComponent } from './add-branch-manager/add-branch-manager.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { DisplayBranchComponent } from './display-branch/display-branch.component';
import { DisplayBranchmanagerComponent } from './display-branchmanager/display-branchmanager.component';

const routes: Routes = [
  {path:"alladmin",component:AdminDisplayComponent},
  {path:"allbranch",component:DisplayBranchComponent},
  {path:"saveadmin",component:AdminAddComponent},
  {path:"allbm",component:DisplayBranchmanagerComponent},
  {path:"savebm",component:AddBranchManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
