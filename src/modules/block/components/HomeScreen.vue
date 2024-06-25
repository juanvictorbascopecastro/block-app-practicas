<template>
    <div
        class="relative flex content-center items-center justify-center"
        style="min-height: 75vh"
    >
        <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            :style="backgroundImage"
        >
            <span
                id="blackOverlay"
                class="w-full h-full absolute opacity-50 dark:opacity-75 bg-black"
            ></span>
        </div>
        <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
                <div class="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                    <div class="pr-12">
                        <h1 class="text-white font-semibold md:text-4xl">
                            INSTITUTO DE TECNOLOGIA DE ALIMENTOS
                        </h1>
                        <p class="mt-4 text-lg text-gray-300">
                            El Instituto de Tecnología de Alimentos (ITA) es una
                            unidad desconcentrada de la Facultad de Tecnología,
                            dependiente de la Universidad San Francisco Xavier
                            de Chuquisaca. Cuenta con laboratorios
                            especializados en Medio Ambiente, Recursos Naturales
                            y Química de Alimentos y Nutrientes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden bg-gray-300 dark:bg-gray-900"
            style="height: 70px"
        >
            <svg
                class="absolute bottom-0 overflow-hidden bg-gray-300 dark:bg-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
                <polygon
                    class="text-gray-300 dark:text-gray-900 fill-current"
                    points="2560 0 2560 100 0 100"
                ></polygon>
            </svg>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import fondo from './../../../assets/fondo.jpg' // Importa la imagen

export default {
    setup() {
        return {
            backgroundImage: computed(() => {
                return {
                    backgroundImage: `url(${fondo})`, // Utiliza la imagen importada
                }
            }),
        }
    },
}
</script>
