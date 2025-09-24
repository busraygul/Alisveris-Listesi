import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("@/views/HomePage.vue")
    },{
        name: "ListPage",
        path: "/list",
        component: () => import("@/views/ListPage.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;