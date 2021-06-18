import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'waypoint', loadChildren: () => import('./waypoint/waypoint/waypoint.module').then(mod => mod.WaypointModule)},
  {path: 'noflyzone', loadChildren: () => import('./noflayzone/noflayzone/noflayzone.module').then(mod => mod.NoflayzoneModule)},
  {path: 'operator', loadChildren: () => import('./operator/operator/operator.module').then(mod => mod.OperatorModule)},
  {path: 'certificate', loadChildren: () => import('./certificate/certificate/certificate.module').then(mod => mod.CertificateModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
