import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateEditComponent } from './create-edit/create-edit.component';

export const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'post/:id',component:ViewComponent},
  {path:'create',component:CreateEditComponent},
  {path:'edit/:id',component:CreateEditComponent}
];
