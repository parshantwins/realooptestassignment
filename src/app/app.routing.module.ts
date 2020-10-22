import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const AppRoutes: Routes = [
  {
  path: "",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "",
    loadChildren: () => import(`./pages/pages.module`).then(m => m.PagesModule)
  }
];

@NgModule({
  imports:
    [
      RouterModule.forRoot(AppRoutes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }