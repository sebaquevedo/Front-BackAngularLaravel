import { AuthGuard } from './guards/auth.guard';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/components/login-page/login-page.component';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: '', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
