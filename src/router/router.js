import Vue from 'vue';
import Router from 'vue-router';
import TodoItemList from "../components/feature/TodoItemList";

Vue.use(Router);
const routes = [
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/feature/About.vue')
    },
    {
        path: '/todo',
        name: 'TodoItemList',
        component: TodoItemList
    },
    {
        path: '/',
        redirect: '/todo'
    },
    {
        path: '**',
        redirect: '/todo'
    }
];
export default new Router({
    routes: routes
});
