import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminguardService } from '../libs/guards/adminguard.service';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { ErrorComponent } from './error/error.component';
import { ClientService } from '../libs/guards/client.service';


const routes: Routes = [
  { path : '',redirectTo:'login',pathMatch:'full'},
  { path : 'error',component:ErrorComponent},
  { path : 'admin',component:AdminComponent,canActivate:[AdminguardService]},
  { path : 'client',component:ClientComponent,canActivate:[ClientService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
