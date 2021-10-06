import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteOnlyForAdminPage } from './delete-only-for-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteOnlyForAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteOnlyForAdminPageRoutingModule {}
