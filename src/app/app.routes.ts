import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login'
import { Register } from './features/auth/pages/register/register';
import { Home } from './features/home/page/home'
import { MainLayout } from './layouts/main-layout/main-layout'
import { Search } from './features/search/page/search/search';

import { Favorite } from './features/favorite/favorite';
import { Cart } from './features/cart/cart';
import { Checkout } from './features/checkout/checkout';
import { Product } from './features/product/product';
import { ForgotPassword } from './features/auth/pages/forgot-password/forgot-password';

export const routes: Routes = [

    {
        path: 'login',
        title: 'login page',
        component: Login,
    },
    {
        path: 'register',
        title: 'cadastrar-se',
        component: Register,
    },
    {
        path: 'forgot-password',
        title: 'esqueceu a senha',
        component: ForgotPassword,
    },
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: 'home',
                component: Home,
                title: 'home page'
            },
            {
                path: 'busca/**',
                component: Search,
                title: 'jorge'
            }, 
            {
                path: '',
                redirectTo: '/home',
                pathMatch: "full"
            },
            {
                path:'produto/:id',
                component: Product
            },
            {
                path: 'cart',
                title: 'Carrinho',
                component: Cart
            },
            {
                path: 'checkout',
                title: 'finalizar',
                component: Checkout
            },
            {
                path:'favorite',
                title: 'favoritos',
                component: Favorite
            },
            {
                path:'**',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            
        ]
    },
];
