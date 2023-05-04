import {createRouter, createWebHistory } from "vue-router"

import PageDashboard from '../pages/master/PageDashboard.vue'

const routes = [
    {
        name : 'PageDashboard',
        path : '/',
        component : PageDashboard

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
