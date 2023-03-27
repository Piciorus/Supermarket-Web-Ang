import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientComponent, AdminComponent, ErrorComponent],
  imports: [CommonModule, CoreRoutingModule, FormsModule],
})
export class CoreModule {}
