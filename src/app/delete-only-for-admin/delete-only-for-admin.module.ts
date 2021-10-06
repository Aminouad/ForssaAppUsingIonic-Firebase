import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteOnlyForAdminPageRoutingModule } from './delete-only-for-admin-routing.module';

import { DeleteOnlyForAdminPage } from './delete-only-for-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteOnlyForAdminPageRoutingModule
  ],
  declarations: [DeleteOnlyForAdminPage]
})
export class DeleteOnlyForAdminPageModule {}
