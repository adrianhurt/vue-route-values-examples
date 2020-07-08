import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import {
    RouteParamValueDemo, RouteQueryValueDemo, RouteValuesMixinDemo, RouteValuesDemo,
} from './Examples'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: '/vue-route-values-examples/',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/route-param-value/:fooId',
            name: 'RouteParamValueDemo',
            component: RouteParamValueDemo,
        },
        {
            path: '/route-query-value',
            name: 'RouteQueryValueDemo',
            component: RouteQueryValueDemo,
        },
        {
            path: '/route-values/:slug',
            name: 'RouteValuesDemo',
            component: RouteValuesDemo,
        },
        {
            path: '/route-query-value-mixin/:slug',
            name: 'RouteValuesMixinDemo',
            component: RouteValuesMixinDemo,
        },
    ],
})

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
