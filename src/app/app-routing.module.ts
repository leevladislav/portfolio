import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';


const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
      },
      {
        path: 'about',
        loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule),
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects-page/projects-page.module').then(m => m.ProjectsPageModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
