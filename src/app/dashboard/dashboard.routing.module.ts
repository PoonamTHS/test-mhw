import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { DashboardPage } from './dashboard.page';
import { HomePage } from './home/home.page';
import { SearchPage} from './search/search.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: DashboardPage,
      children:
      [
        {
        path: 'home' ,
        children:
           [
              {
                path: '',
                loadChildren: './home/home.module#HomePageModule'
              }
           ]
        },
        {
        path: 'search',
        children:
            [
                {
                    path: '',
                    loadChildren: './search/search.module#SearchPageModule'
                }

            ]
        },
        {
            path: '',
            redirectTo: '/dashboard/tabs/search',
            pathMatch: 'full'
        }
    ]
    },
    {
        path: '',
        redirectTo: '/dashboard/tabs/search',
        pathMatch: 'full'
    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class DashboardRoutingModule {}
