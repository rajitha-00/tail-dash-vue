import {createRouter, createWebHistory } from "vue-router"

import PageDashboard from '../pages/master/PageDashboard.vue'
import HomePage from '../pages/HomePage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
const routes = [
    {
        name : 'PageDashboard',
        path : '/',
        component : PageDashboard

    },
    {
        name : 'HomePage',
        path : '/home',
        component : HomePage

    },
    {
        name : 'ProfilePage',
        path : '/profile',
        component : ProfilePage

    }
];

const router = Router( );

export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
