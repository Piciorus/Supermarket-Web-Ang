import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/auth/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminguardService } from './libs/guards/adminguard.service';
import { ClientService } from './libs/guards/client.service';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./components/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/authmodule.module').then((m) => m.AuthmoduleModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'app' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
