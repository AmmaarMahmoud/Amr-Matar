import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path: 'user', loadChildren:() => import('./user-managment/user-managment.module').then(m=>m.UserManagmentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
