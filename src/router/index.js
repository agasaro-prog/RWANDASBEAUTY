import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";
import Southern from "../views/southern.vue";
import Western from "../views/western.vue";
import Northern from "../views/northern.vue";
import Videos from "../views/videos.vue";
import Images from "../views/images.vue";
import Eastern from "../views/eastern.vue";
import Kigali from "../views/kigali.vue";
import Photos from "../views/Photos.vue";
import Login from "../views/login.vue";
import Registration from "../views/Registration.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";



const routes = [
    {
        path:"/",
        name:"Home",
        component: Home
    },
     {
        path:"/about",
        name:"About",
        component: About

    },
    {
        path:"/services",
        name:"Services",
        component: Services
    },
    {
         path:"/contact",
        name:"Contact",
        component: Contact
    },
    {
         path:"/southern",
        name:"Southern",
        component: Southern
    },
    {
         path:"/western",
        name:"western",
        component:Western
    },
    {
         path:"/northern",
        name:"northern",
        component:Northern
    },
    {
         path:"/photos",
        name:"photos",
        component:Photos
    },
    {
         path:"/images",
        name:"images",
        component:Images
    },
    {
         path:"/eastern",
        name:"eastern",
        component:Eastern
    },
    {
         path:"/kigali",
        name:"kigali",
        component:Kigali
    },
    {
        path:"/videos",
        name:"videos",
        component:  Videos
    },
    {
        path:"/login",
        name:"login",
        component:  Login
    },
     {
        path:"/register",
        name:"register",
        component:  Registration
    },
     {
        path:"/dashboard",
        name:"dashboard",
        component:  Dashboard
    }


];
const router = createRouter(
        {
            history: createWebHistory(),
            routes,
        }
    );
    export default router;


