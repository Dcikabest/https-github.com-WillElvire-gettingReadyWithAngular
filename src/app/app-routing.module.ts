
import { NgModule } from '@angular/core';
import {RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import { AboutComponent } from './views/landings/about/about.component';
import { ContactComponent } from './views/landings/contact/contact.component';
import { Page404Component } from './views/landings/error/page404/page404.component';
import { HomeComponent } from './views/landings/home/home.component';

const routes : Routes = [
  {
    path:'home',
    component : HomeComponent
  },
  {
    path:'about',
    component : AboutComponent
  },
  {
    path:'contact',
    component : ContactComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo : 'home'
  },
  {
    path:'**',
    component: Page404Component
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules , scrollPositionRestoration: 'top' }),

  ],
  exports: [RouterModule]
})

export class AppRoutingModule  {

}
