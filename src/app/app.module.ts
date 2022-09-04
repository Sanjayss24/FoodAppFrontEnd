import { DisplayBranchComponent } from './display-branch/display-branch.component';
import { EditFoodProductComponent } from './edit-food-product/edit-food-product.component';
import { DisplayFoodProductComponent } from './display-food-product/display-food-product.component';

import { DisplayFoodOrderComponent } from './display-food-order/display-food-order.component';
import { DisplayStaffComponent } from './display-staff/display-staff.component';
import { DisplayMenuComponent } from './display-menu/display-menu.component';

import { EditFoodOrderComponent } from './edit-food-order/edit-food-order.component';
import { DeleteadminComponent } from './deleteadmin/deleteadmin.component';
import { DeletebmComponent } from './deletebm/deletebm.component';
import { DeletefoComponent } from './deletefo/deletefo.component';
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
   
    DisplayFoodorderComponent,
    
    AddBranchComponent,

    DisplayBranchComponent,
    EditFoodProductComponent,
    DisplayFoodProductComponent,
   
    DisplayFoodOrderComponent,


    DisplayStaffComponent,
    DisplayMenuComponent,
   
    EditFoodOrderComponent,
    DeleteadminComponent,
    DeletebmComponent,
    DeletefoComponent
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
