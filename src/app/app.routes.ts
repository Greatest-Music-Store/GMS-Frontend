import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login'
import { Register } from './features/auth/pages/register/register';
import { Home } from './features/home/page/home'
import { MainLayout } from './layouts/main-layout/main-layout'
import { Search } from './features/search/page/search/search';
import { Account } from './features/account/account';
import { Favorite } from './features/favorite/favorite';
import { Cart } from './features/cart/cart';
import { Checkout } from './features/checkout/checkout';
import { Product } from './features/product/product';

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
                title: 'nome do produto',
                component: Product
            },
             {
                path: 'jorge',
                title: 'conta',
                component: Account,
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
