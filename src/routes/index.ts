import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "@/pages/HomeComponent.vue";
import ServicesComponent from "@/pages/ServicesComponent.vue";
import TestimonialsComponent from "@/pages/TestimonialsComponent.vue";
import ContactComponent from "@/pages/ContactComponent.vue";
import BlogComponent from "@/pages/BlogComponent.vue";
import LoginComponent from "@/pages/LoginComponent.vue";
import RegisterComponent from "@/pages/RegisterComponent.vue";

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
            path: "/services",
            name: "services",
            component: ServicesComponent,
        },
        {
            path: "/testimonials",
            name: "testimonials",
            component: TestimonialsComponent,
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