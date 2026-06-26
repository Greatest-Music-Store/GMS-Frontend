import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login'
import { Register } from './features/auth/pages/register/register';
import { ForgotPassword } from './features/auth/pages/forgot-password/forgot-password';

import { MainLayout } from './layouts/main-layout/main-layout'
import { Search } from './features/search/search';
import { Home } from './features/home/home'
import { Favorite } from './features/favorite/favorite';
import { Cart } from './features/cart/cart';
import { Checkout } from './features/checkout/checkout';
import { Product } from './features/product/product';

import { AdmLayout } from './features/admin/adm-layout/adm-layout';
import { Dashboard } from './features/admin/pages/dashboard/dashboard';
import { ProductsAdmPage } from './features/admin/pages/products/products';
import { Categories } from './features/admin/pages/categories/categories';
import { UsersAdmPage } from './features/admin/pages/users/users';

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
                title: 'Home'
            },
            {
                path: 'search/**',
                component: Search,
                title: 'Search'
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: "full"
            },
            {
                path: 'produto/:id',
                component: Product
            },
            {
                path: 'cart',
                title: 'Carrinho',
                component: Cart
            },
            {
                path: 'checkout',
                title: 'Finalizar',
                component: Checkout
            },
            {
                path: 'favorite',
                title: 'Favoritos',
                component: Favorite
            },

        ]
    },
    {
        path: 'adm',
        component: AdmLayout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                title: 'Adm Dashboard'
            },
            {
                path: 'products',
                component: ProductsAdmPage,
                title: 'Todos os produtos'
            },
            {
                path: 'users',
                component: UsersAdmPage,
                title: 'Clientes'
            },
            {
                path: 'categories',
                component: Categories,
                title: 'Categorias'
            }
        ]
    }
];
