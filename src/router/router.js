import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import {auth as $store} from "@/store/auth.model";
import MainPage from "@/pages/NoUser/MainPage";
import LoginPage from "@/pages/NoUser/LoginPage";
import RegistrationPage from "@/pages/NoUser/RegistrationPage";

import MainAdminPage from "@/pages/Admin/MainAdminPage";
import PrefabsPage from "@/pages/Admin/PrefabsPage";

import MainUserPage from "@/pages/User/MainUserPage";
import CompanyPage from "@/pages/User/CompanyPage";
import PackPage from "@/pages/User/PackPage";
import CompanyFormPage from "@/pages/User/CompanyFormPage";
import PrefabsFormPage from "@/pages/Admin/PrefabsFormPage";

const routes = [
    {
        path: '/',
        component: MainPage,
        children: [
            {
                path: "sign-in",
                component: LoginPage
            },
            {
                path: "sign-up",
                component: RegistrationPage
            }
        ],
        beforeEnter: (to, from, next) => {
            const initialState = $store.state
            if(initialState.status.loggedIn){
                if(initialState.user.type.name === "user") {
                    next("/menu");
                }
                else {
                    next("/admin");
                }
            }else{
                next(true)
            }
        }
    },
    {
        path: '/admin',
        component: MainAdminPage,
        children: [
            {
                path: "prefabs",
                component: PrefabsPage
            },
            {
                path: "prefabs/add",
                component: PrefabsFormPage
            },
            {
                path: "prefabs/edit/:uuid_prefabs",
                component: PrefabsFormPage
            },
        ],
        beforeEnter: (to, from, next) => {
            const initialState = $store.state
            if(initialState.status.loggedIn){
                if(initialState.user.type.name === "admin") {
                    next();
                }
                else {
                    next(false);
                }
            }else{
                next('/')
            }
        }
    },
    {
        path: '/user',
        component: MainUserPage,
        children: [
            {
                path: "companies",
                component: CompanyPage
            },
            {
                path: "companies/add",
                component: CompanyFormPage
            },
            {
                path: "companies/edit/:uuid_company",
                component: CompanyFormPage
            },
            {
                path: "create-pack",
                component: PackPage
            }
        ],
        beforeEnter: (to, from, next) => {
            const initialState = $store.state
            if(initialState.status.loggedIn){
                if(initialState.user.type.name === "user") {
                    next();
                }
                else {
                    next(false);
                }
            }else{
                next('/')
            }
        }
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router