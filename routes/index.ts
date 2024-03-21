import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../src/pages/HomeComponent.vue";
import ContactComponent from "../src/pages/ContactComponent.vue";
import BlogComponent from "../src/pages/BlogComponent.vue";
import LoginComponent from "../src/pages/LoginComponent.vue";
import RegisterComponent from "../src/pages/RegisterComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeComponent,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactComponent,
        },
        {
            path: "/blog",
            name: "blog",
            component: BlogComponent,
        },
        {
            path: "/sign-in",
            name: "login",
            component: LoginComponent,
        },
        {
            path: "/sign-up",
            name: "register",
            component: RegisterComponent,
        },
    ],
});

export default router;