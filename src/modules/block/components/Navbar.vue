<template>
    <div class="fixed w-full z-20">
        <header
            class="header top-0 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between px-4 md:px-8 py-2"
        >
            <h1 class="w-3/12">
                <a href="" class="flex items-center">
                    <img
                        src="./../../../assets/usfx.png"
                        class="h-16 w-12 p-0.5 mr-2 rounded-full dark:bg-gray-50"
                    />
                    <span
                        class="text-center dark:text-white text-gray-900 font-bold text-4xl"
                    >
                        ITA
                    </span>
                </a>
            </h1>

            <nav class="nav font-semibold hidden lg:flex">
                <ul class="flex items-center">
                    <li>
                        <router-link
                            class="relative p-4 px-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
                            :to="{ name: 'inicio' }"
                        >
                            Inicio
                        </router-link>
                    </li>
                    <li
                        class="relative p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
                        :class="{
                            ' text-blue-500 border-opacity-100':
                                $route.name === 'organizacion',
                        }"
                        @mouseover="optionsOrganizacion = true"
                        @mouseleave="optionsOrganizacion = false"
                    >
                        <span class="block">Organización</span>
                        <div
                            v-if="optionsOrganizacion"
                            class="absolute top-full left-0 mt-0 bg-white dark:bg-[#1A2238] shadow-md rounded border border-gray-300 dark:border-[#121726] text-white text-sm z-30 whitespace-nowrap"
                        >
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-500"
                            >
                                Publicaciones
                            </a>
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-500"
                            >
                                Proyectos
                            </a>
                            <a
                                href="#"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-500"
                            >
                                Participación en eventos
                            </a>
                        </div>
                    </li>
                    <li
                        class="relative p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
                        :class="{
                            ' text-blue-500 border-opacity-100':
                                $route.name === 'infraestructura',
                        }"
                        @mouseover="optionsLab = true"
                        @mouseleave="optionsLab = false"
                    >
                        <span class="block">Laboratorios</span>
                        <div
                            v-if="optionsLab"
                            class="absolute top-full left-0 mt-0 bg-white dark:bg-[#1A2238] shadow-md rounded border border-gray-300 dark:border-[#121726] text-white text-sm z-30 whitespace-nowrap"
                        >
                            <router-link
                                :to="{ name: 'laboratorios' }"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-500"
                            >
                                Laboratorios
                            </router-link>
                            <router-link
                                :to="{ name: 'plantas' }"
                                class="block px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-500"
                            >
                                Plantas
                            </router-link>
                        </div>
                    </li>
                    <li
                        class="p-4 px-2 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
                        style="white-space: nowrap"
                    >
                        <router-link :to="{ name: 'quienes-somos' }"
                            >Quiénes Somos</router-link
                        >
                    </li>
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
                <router-link
                    to="/login"
                    class="bg-blue-500 px-3 ml-1 py-1.5 text-white items-center space-x-2 rounded focus:bg-blue-600 hidden lg:inline-block whitespace-nowrap"
                >
                    <i class="bi bi-box-arrow-in-right"></i>
                    <span>Iniciar sesión</span>
                </router-link>
            </div>
        </header>
        <div
            class="absolute top-full left-0 mt-0 z-30 lg:hidden w-full bg-white dark:bg-gray-900 border-t-2 py-2 px-3 text-gray-800 dark:text-gray-200"
            v-show="showMobileMenu"
        >
            <div class="flex flex-col">
                <router-link
                    :to="{ name: 'inicio' }"
                    class="text-sm font-semibold hover:text-blue-500 py-2"
                    :class="{
                        ' text-blue-500': $route.name === 'inicio',
                    }"
                >
                    Inicio
                </router-link>
                <button
                    class="text-sm font-semibold hover:text-blue-500 py-2 text-left"
                >
                    <i class="bi bi-bank mr-1"></i>
                    Organización
                </button>
                <router-link
                    class="text-sm font-semibold hover:text-blue-500 py-2 text-left"
                    :to="{ name: 'laboratorios' }"
                >
                    <i class="bi bi-thermometer-sun mr-1"></i>
                    Laboratorios
                </router-link>
                <router-link
                    class="text-sm font-semibold hover:text-blue-500 py-2 text-left"
                    :to="{ name: 'plantas' }"
                >
                    <i class="bi bi-clipboard-fill mr-1"></i>
                    Plantas
                </router-link>
                <router-link
                    class="text-sm font-semibold hover:text-blue-500 py-2 text-left"
                    :to="{ name: 'quienes-somos' }"
                >
                    <i class="bi bi-info-circle-fill mr-1"></i>
                    Quiénes Somos
                </router-link>
                <div class="flex justify-between items-center border-t-2 pt-2">
                    <Social />
                    <router-link
                        to="/login"
                        class="bg-blue-500 px-3 py-1.5 text-white inline-flex items-center space-x-2 rounded focus:bg-blue-600"
                    >
                        <i class="bi bi-box-arrow-in-right"></i>
                        <span>Iniciar sesión</span>
                    </router-link>
                </div>
            </div>
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
        const optionsLab = ref(false)
        const optionsOrganizacion = ref(false)

        const { modeDark, isDark } = myApp()
        const { scrollToSection, showMenuPlanes, showMobileMenu } = myNavbar()

        return {
            modeDark,
            isDark,
            showMenuPlanes,
            showMobileMenu,
            scrollToSection,
            optionsLab,
            optionsOrganizacion,
        }
    },
    components: { Dropdowns, Social },
}
</script>
