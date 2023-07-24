import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardFlatComponent } from './pages/dashboard-flat/dashboard-flat.component';

const routes: Routes = [

    {
        path: 'dashboard', 
        component: DashboardFlatComponent,
        loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule)
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    
})
export class DashboardRoutingModule { }
