import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app-one'
  },
  {
    path: 'app-one', loadChildren: () => import('./features/app-one/app-one.module').then(m => m.AppOneModule),
    component: MainLayoutComponent
  },
  {
    path: 'app-service', loadChildren: () => import('./features/app-service/app-service.module').then(m => m.AppServiceModule),
    component: MainLayoutComponent
  },
  {
    path: 'app-form', loadChildren: () => import('./features/app-form/app-form.module').then(m => m.AppFormModule),
    component: MainLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
