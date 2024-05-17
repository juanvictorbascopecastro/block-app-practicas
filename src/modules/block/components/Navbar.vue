<template>
    <div class="fixed w-full z-20">
        <header
            class="header top-0 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between px-4 md:px-8 py-02"
        >
            <h1 class="w-3/12">
                <a href="" class="flex items-center">
                    <img
                        src="./../../../assets/usfx.png"
                        class="h-16 w-12 p-0.5 mr-2 rounded-full dark:bg-gray-50"
                    />
                    <span
                        class="text-center dark:text-white text-gray-900 font-bold text-4xl"
                        >USFX</span
                    >
                </a>
            </h1>

            <nav class="nav font-semibold hidden lg:flex">
                <ul class="flex items-center">
                    <li>
                        <button
                            class="relative p-4 px-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer"
                            @click="scrollToSection('inicio')"
                        >
                            Inicio
                        </button>
                    </li>
                    <li
                        class="relative p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer whitespace-nowrap"
                        :class="{
                            ' text-green-500 border-opacity-100':
                                $route.name === 'infraestructura',
                        }"
                        @mouseover="optionsInstituto = true"
                        @mouseleave="optionsInstituto = false"
                    >
                        <span class="block">El instituto</span>
                        <div
                            v-if="optionsInstituto"
                            class="absolute top-full left-0 mt-0 bg-white dark:bg-[#1A2238] shadow-md rounded border border-gray-300 dark:border-[#121726] text-white text-sm z-30 whitespace-nowrap"
                        >
                            <!-- Aquí van tus opciones de menú -->
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Quienes somos</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Misión y visión</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Personal ICTA</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Contacto</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Portafolio de servicios</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Noticias</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Calidad</a
                            >
                        </div>
                    </li>
                    <li
                        class="relative p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer"
                        :class="{
                            ' text-green-500 border-opacity-100':
                                $route.name === 'infraestructura',
                        }"
                        @mouseover="optionsInfraestructura = true"
                        @mouseleave="optionsInfraestructura = false"
                    >
                        <span class="block">Infraestructura</span>
                        <div
                            v-if="optionsInfraestructura"
                            class="absolute top-full left-0 mt-0 bg-white dark:bg-[#1A2238] shadow-md rounded border border-gray-300 dark:border-[#121726] text-white text-sm z-30 whitespace-nowrap"
                        >
                            <!-- Aquí van tus opciones de menú -->
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Laboratorios</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Plantas</a
                            >
                        </div>
                    </li>
                    <li
                        class="relative p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer"
                        :class="{
                            ' text-green-500 border-opacity-100':
                                $route.name === 'investigacion',
                        }"
                        @mouseover="optionsInvestigacion = true"
                        @mouseleave="optionsInvestigacion = false"
                    >
                        <span class="block">Investigacion</span>
                        <div
                            v-if="optionsInvestigacion"
                            class="absolute top-full left-0 mt-0 bg-white dark:bg-[#1A2238] shadow-md rounded border border-gray-300 dark:border-[#121726] text-white text-sm z-30 whitespace-nowrap"
                        >
                            <!-- Aquí van tus opciones de menú -->
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Laboratorios</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Plantas</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Publicaciones</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Proyectos</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Participacion de eventos</a
                            >
                        </div>
                    </li>

                    <li
                        class="relative p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer"
                        :class="{
                            ' text-green-500 border-opacity-100':
                                $route.name === 'sedes',
                        }"
                        @mouseover="optionsSedes = true"
                        @mouseleave="optionsSedes = false"
                    >
                        <span class="block">SEDES</span>
                        <div
                            v-if="optionsSedes"
                            class="absolute top-full left-0 mt-0 bg-white dark:bg-[#1A2238] shadow-md rounded border border-gray-300 dark:border-[#121726] text-white text-sm z-30 whitespace-nowrap"
                        >
                            <!-- Aquí van tus opciones de menú -->
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Amazonia</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Bogotá</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Caribe</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >De La Paz</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Manizales</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Medellín</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Orinoquia</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Palmira</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500"
                                >Tumaco</a
                            >
                        </div>
                    </li>

                    <li
                        class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer"
                    >
                        <router-link to="404">404</router-link>
                    </li>
                    <li
                        class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer"
                    ></li>
                </ul>
            </nav>

            <div class="w-3/10 flex justify-end py-3">
                <div class="hidden lg:flex md:mr-4 mt-2"><Social /></div>

                <button
                    class="text-[#1A2238] bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:text-white font-bold py-1 px-3 rounded transition-colors duration-300 mr-1.5"
                    @click="modeDark()"
                >
                    <i
                        class="bi bi-brightness-high-fill text-xl"
                        v-if="isDark"
                    ></i>
                    <i class="bi bi-moon-fill text-xl" v-else></i>
                </button>
                <button
                    class="text-[#1A2238] bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:text-white font-bold py-1 px-3 rounded transition-colors duration-300 lg:hidden"
                    @click="showMobileMenu = !showMobileMenu"
                >
                    <i class="bi bi-list text-xl"></i>
                </button>
            </div>
        </header>
        <div
            class="absolute top-full left-0 mt-0 z-30 lg:hidden w-full bg-white dark:bg-gray-900 border-t-2 py-2 px-3 text-gray-800 dark:text-gray-200"
            v-show="showMobileMenu"
        >
            <div class="flex flex-col"></div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import Dropdowns from './../components/Dropdowns.vue'
import Social from '../../../components/Social.vue'
import myApp from './../../../composables'
import myNavbar from '../composables/navbar'

export default {
    setup() {
        const isDark = ref(false)
        const optionsInstituto = ref(false)
        const optionsInfraestructura = ref(false)
        const optionsInvestigacion = ref(false)
        const optionsSedes = ref(false)

        const { modeDark } = myApp()

        const { scrollToSection, showMenuPlanes, showMobileMenu } = myNavbar()

        return {
            modeDark,
            isDark,
            showMenuPlanes,
            showMobileMenu,
            scrollToSection,
            optionsInstituto,
            optionsInfraestructura,
            optionsInvestigacion,
            optionsSedes,
        }
    },
    components: { Dropdowns, Social },
}
</script>
