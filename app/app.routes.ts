import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
];

export const appRouterProviders: any[] =[ ];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);