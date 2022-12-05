import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { HomeComponent } from './home/home.component';
import { InnerDesignComponent } from './inner-design/inner-design.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'admin/user',
    component: AdminUserComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'docs',
    component: InnerDesignComponent,
  },
//   { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
// { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
// { path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule) },
// { path: 'taxfiling', loadChildren: () => import('./taxfiling/taxfiling.module').then(m => m.TaxfilingModule) },
// { path: 'datasecurity', loadChildren: () => import('./datasecurity/datasecurity.module').then(m => m.DatasecurityModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
