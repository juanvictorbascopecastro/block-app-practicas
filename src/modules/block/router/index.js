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
            path: '/laboratorios',
            name: 'laboratorios',
            component: () => import('../views/LaboratorioView.vue'),
        },
        {
            path: '/plantas',
            name: 'plantas',
            component: () => import('../views/PlantasView.vue'),
        },
        {
            path: '/quienes-somos',
            name: 'quienes-somos',
            component: () => import('../views/QuienesSomosView.vue'),
        },
        {
            path: '/investigacion',
            name: 'investigacion',
            component: () => import('../views/InvestigacionView.vue'),
        },
    ],
}
