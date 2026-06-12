import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login'
import { Home } from './features/home/home'
import { MainLayout } from './layouts/main-layout/main-layout';


export const routes: Routes = [
    
    {
        path: 'login',
        title: 'login page',
        component: Login,
    },
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: 'home', 
                component: Home,
                title: 'home page'
            },{
                path: '',
                redirectTo:'/home',
                pathMatch: "full"
            },
            {
                path: '**',
                redirectTo:'/home',
                pathMatch: "full"
            }
        ]
    },
];
