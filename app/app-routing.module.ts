import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {LoginComponent} from "./login/login.component"
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent
  // },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routedComponents = [LoginComponent, HeroesComponent, HeroDetailComponent];
