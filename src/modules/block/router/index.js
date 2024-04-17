export default {
    name: 'home',
    alias: ['/home'], // muestra el mismo contenido con otra direccion
    component: () => import('../layouts/Layout.vue'),
    redirect: {
        name: 'inicio',
    },
    meta: {
        requiresAuth: false,
    },
    children: [
        {
            path: '',
            name: 'inicio',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/infraestructura',
            name: 'infraestructura',
            component: () => import('../views/InfraestructuraView.vue'),
        },
        {
            path: '/servicios',
            name: 'servicios',
            component: () => import('../views/ServicesView.vue'),
        },

        {
            path: '/investigacion',
            name: 'investigacion',
            component: () => import('../views/InvestigacionView.vue'),
        },
    ],
}
