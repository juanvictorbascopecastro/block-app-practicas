<template>
    <div class="pt-20">
        <CurrentRouter />
        <div class="flex flex-wrap w-full mb-4 p-4">
            <div class="w-full mb-6 lg:mb-0">
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl font-bold title-font mb-2 text-gray-900 dark:text-gray-200"
                >
                    Laboratorios
                </h1>
                <div
                    class="h-1 w-48 sm:w-56 md:w-72 bg-indigo-500 rounded"
                ></div>
            </div>
        </div>
        <div className="w-full rounded-md border">
            <img
                src="./../../../assets/lab3.jpg"
                alt="Laptop"
                className="h-[100vh] w-full rounded-md object-cover"
                style="height: 70vh"
            />
        </div>
        <!-- component -->
        <section class="ray-50">
            <div
                class="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8"
            >
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                    <div class="max-w-xl mx-auto text-center">
                        <div class="inline-flex px-4 py-6 mx-auto rounded-full">
                            <p
                                class="text-4xl font-semibold tracking-widest text-g uppercase"
                            >
                                Laboratorios
                            </p>
                        </div>
                        <p
                            class="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white"
                        >
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit..
                        </p>
                    </div>
                    <div
                        class="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20"
                    >
                        <a
                            href="#"
                            class="transition-all duration-1000 bg-white dark:bg-slate-600 hover:bg-blue-500 hover:shadow-xl m-2 p-4 relative z-10 group"
                        >
                            <div
                                class="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"
                            ></div>
                            <div class="py-2 px-9 relative">
                                <svg
                                    class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                    viewBox="0 0 14 14"
                                    role="img"
                                    focusable="false"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m 10.093377,1.0008264 a 0.23985753,0.23985753 0 0 0 -0.02998,0.0075 0.23985753,0.23985753 0 0 0 -0.1199167,0.412214 l 0.3072877,0.307286 -1.4989597,1.49896 1.7837617,1.783762 1.49896,-1.49896 0.307286,0.307287 a 0.24378284,0.24378284 0 1 0 0.344761,-0.344761 l -2.398335,-2.398335 a 0.23985753,0.23985753 0 0 0 -0.194865,-0.07495 z m -2.8780024,1.439001 a 0.23985753,0.23985753 0 0 0 -0.029979,0.0075 0.23985753,0.23985753 0 0 0 -0.1199168,0.412214 l 0.5546151,0.554615 -5.1039577,5.103958 c -0.047967,0.04797 -0.074948,0.137904 -0.074948,0.209854 l 0.4197085,1.6938186 -1.6188764,1.618877 0,0.959334 2.1135331,-2.113533 1.6488557,0.412214 0.052464,0 c 0.07195,0 0.1169188,-0.02698 0.1648855,-0.07495 l 5.1039574,-5.1039576 0.577099,0.5771 a 0.24378284,0.24378284 0 0 0 0.344761,-0.344761 L 7.4102393,2.5147754 a 0.23985753,0.23985753 0 0 0 -0.1948647,-0.07495 z m 0.2398335,1.806247 0.8843862,0.914365 c 0.095934,0.09593 0.095934,0.233838 0,0.329771 -0.047967,0.04797 -0.1169188,0.07495 -0.1648855,0.07495 -0.047967,0 -0.1244137,-0.02698 -0.1723804,-0.07495 l -0.8843862,-0.884386 0,-0.02249 0.3372659,-0.337265 z m -0.9593342,0.981818 0.022484,0 0.4047191,0.412214 c 0.095934,0.09593 0.095934,0.233838 0,0.329771 -0.047967,0.04797 -0.1169188,0.07495 -0.1648855,0.07495 -0.047967,0 -0.1169189,-0.02698 -0.1648856,-0.07495 L 6.1810924,5.5651584 6.4958739,5.2278924 Z m -0.9593341,0.959334 0.022484,0 0.8843863,0.891881 c 0.095933,0.09593 0.095933,0.233838 0,0.329771 -0.047967,0.04797 -0.1169189,0.07495 -0.1648856,0.07495 -0.047967,0 -0.1169189,-0.02698 -0.1648856,-0.07495 l -0.9143654,-0.861901 0,-0.02249 0.337266,-0.337266 z m -0.9593342,0.959334 0.022484,0 0.4047191,0.412214 c 0.095933,0.09593 0.095933,0.233838 0,0.329772 -0.047967,0.04797 -0.1169189,0.07495 -0.1648856,0.07495 -0.047967,0 -0.1169188,-0.02698 -0.1648856,-0.07495 l -0.4122139,-0.40472 0.3147816,-0.337266 z m -0.9593342,0.959335 0.022484,0 0.8843862,0.891881 c 0.095933,0.09593 0.095933,0.233837 0,0.329771 -0.047967,0.04797 -0.1169189,0.07495 -0.1648856,0.07495 -0.047967,0 -0.1169188,-0.02698 -0.1648856,-0.07495 l -0.9143654,-0.861902 0,-0.02248 0.337266,-0.337266 z"
                                    />
                                </svg>

                                <h3
                                    class="mt-8 text-lg font-semibold text-black dark:text-gray-100 group-hover:text-white"
                                >
                                    Toxicología
                                </h3>
                                <p
                                    class="mt-4 text-base text-gray-600 dark:text-gray-200 group-hover:text-white"
                                >
                                    Este laboratorio desempeña un papel
                                    fundamental en la garantía de la seguridad
                                    alimentaria y la calidad de los productos
                                    consumidos por la población. Es uno de los
                                    laboratorios más completos.
                                </p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="transition-all duration-1000 bg-white dark:bg-slate-600 hover:bg-blue-500 hover:shadow-xl m-2 p-4 relative z-10 group"
                        >
                            <div
                                class="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"
                            ></div>
                            <div class="py-2 px-9 relative">
                                <svg
                                    class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    enable-background="new 0 0 64 64"
                                    viewBox="0 0 64 64"
                                    id="furniture"
                                >
                                    <path
                                        d="M13.6 4.8v54.3c0 .4.3.8.8.8H31v-2.3H19c-.6 0-1-.5-1-1s.5-1 1-1h12V4.1H14.4C14 4.1 13.6 4.4 13.6 4.8zM29.1 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM29.1 25.8v6.5c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1S29.1 25.3 29.1 25.8zM16.1 11c0-1.6 1.3-2.8 2.8-2.8h7.4c.6 0 1 .5 1 1 0 .6-.5 1-1 1H19c-.4 0-.8.3-.8.8v17.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V11zM49.6 4.1H33v51.5h12c.4 0 .8-.3.8-.8V9.2c0-.6.5-1 1-1s1 .5 1 1v45.5c0 1.6-1.3 2.8-2.8 2.8H33v2.3h16.6c.4 0 .8-.3.8-.8V4.8C50.4 4.4 50 4.1 49.6 4.1zM37 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM37 32.3c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1s1 .5 1 1V32.3z"
                                    ></path>
                                </svg>
                                <h3
                                    class="mt-8 text-lg font-semibold text-black dark:text-gray-100 group-hover:text-white"
                                >
                                    MIC. Laboratorio de microbiología
                                </h3>
                                <p
                                    class="mt-4 text-base text-gray-600 dark:text-gray-200 group-hover:text-white"
                                >
                                    Este laboratorio realiza diversas
                                    actividades relacionadas con la
                                    investigación y el diagnóstico, control de
                                    calidad de alimentos, aguas y sueros,
                                    contribuyendo así a la protección de los
                                    cultivos y la seguridad.
                                </p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="transition-all duration-1000 bg-white dark:bg-slate-600 hover:bg-blue-500 hover:shadow-xl m-2 p-4 relative z-10 group"
                        >
                            <div
                                class="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"
                            ></div>
                            <div class="py-2 px-9 relative">
                                <svg
                                    class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024 1024"
                                    id="face-cream"
                                >
                                    <path
                                        d="M408.24 203.7c-16.8 18.81-34.07 38.15-45.8 60.98h-.01a144.56 144.56 0 0 0-3.61 7.53c-1.09 2.46-2.12 4.97-3.06 7.52L200 280.74l10.02-12.33c33.53-41.24 85.75-59.31 136.26-76.78l2.76-.95c38.97-13.49 81.46-30.03 108.56-58.05-2.37 6.13-5.24 12.05-8.44 17.76-3.25 5.78-6.84 11.34-10.61 16.65-6.05 8.54-12.53 16.42-18.71 23.55-3.79 4.37-7.76 8.81-11.6 13.11zm213.12 74.31-243.92 1.58c1.15-2.54 2.4-5.05 3.72-7.52 1.36-2.55 2.81-5.06 4.33-7.54h.01c10.38-16.95 24.18-32.41 37.66-47.51 3.88-4.35 7.9-8.85 11.78-13.32 13.46-15.51 29.93-36.5 40.09-61.08 11.97 29.63 32.42 55.96 58.5 74.26 10.56 7.41 21.85 13.48 32.77 19.35 7.41 3.98 15.06 8.1 22.2 12.5 7.58 4.67 14.1 9.45 19.6 14.37 2.73 2.45 5.21 4.93 7.45 7.45 2.16 2.44 4.1 4.93 5.81 7.46zm203.7-1.32-180.85 1.17a80.225 80.225 0 0 0-3.99-7.47 84.144 84.144 0 0 0-5.08-7.47c-8.52-11.25-20.48-21.57-36.14-31.22-7.65-4.71-15.57-8.97-23.23-13.08-10.88-5.85-21.16-11.38-30.75-18.11-18.61-13.06-33.97-30.78-44.71-50.93-2.95-5.51-5.55-11.21-7.77-17.04-2.16-5.66-3.97-11.44-5.39-17.32 34.48 43.58 93.86 62.93 153.05 77.3 3.22.78 6.45 1.56 9.69 2.34 57.97 13.97 117.91 28.43 161.38 68.97l13.79 12.86zm60.9 160.14h-53.22v-22.46h16.55v-30h-16.55V363.1h17.55v-30h-17.55v-13.47c0-7.71-6.28-13.99-14-13.99H205.26c-7.72 0-14 6.28-14 13.99v13.47h-17.55v30h17.55v21.27h-18.55v30h18.55v22.46h-53.22c-17.39 0-31.54 14.15-31.54 31.54v319.01c0 21.66 6.62 42.44 19.14 60.1l20.46 28.88c14.39 20.31 37.85 32.43 62.74 32.43h606.32c24.89 0 48.35-12.12 62.74-32.43l20.46-28.88c12.52-17.66 19.14-38.44 19.14-60.1V468.37c0-17.39-14.15-31.54-31.54-31.54zm-67.84 320.05c0 2.09-1.69 3.78-3.78 3.78H209.66c-2.09 0-3.78-1.69-3.78-3.78V541.85c0-2.09 1.69-3.78 3.78-3.78h604.68c2.09 0 3.78 1.69 3.78 3.78v215.03z"
                                    ></path>
                                    <path
                                        d="M345.64 634.36h332.72v30H345.64z"
                                    ></path>
                                </svg>
                                <h3
                                    class="mt-8 text-lg font-semibold text-black dark:text-gray-100 group-hover:text-white"
                                >
                                    Microbiología
                                </h3>
                                <p
                                    class="mt-4 text-base text-gray-600 dark:text-gray-200 group-hover:text-white"
                                >
                                    Este laboratorio desempeña un papel
                                    fundamental en la garantía de la seguridad
                                    alimentaria y calidad de los productos
                                    consumidos por la población.
                                </p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="transition-all duration-1000 bg-white dark:bg-slate-600 hover:bg-blue-500 hover:shadow-xl m-2 p-4 relative z-10 group"
                        >
                            <div
                                class="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"
                            ></div>
                            <div class="py-2 px-9 relative">
                                <svg
                                    class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 64 64"
                                    id="engine"
                                >
                                    <path
                                        d="M60,34H56a1,1,0,0,0-1,1v3H52V28a1,1,0,0,0-1-1H47.51l-4.7-6.58A1,1,0,0,0,42,20H35V17h3a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H26a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h3v3H24a1,1,0,0,0-.81.42L18.49,27H13a1,1,0,0,0-1,1V38H9V35a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V44h3v5a1,1,0,0,0,1,1H24.59l2.7,2.71A1,1,0,0,0,28,53H48a1,1,0,0,0,.71-.29l3-3A1,1,0,0,0,52,49V44h3v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V35A1,1,0,0,0,60,34ZM35.77,37.64l-5,6A1,1,0,0,1,30,44a1,1,0,0,1-.64-.23,1,1,0,0,1-.13-1.41L32.87,38H29a1,1,0,0,1-.77-1.64l5-6a1,1,0,0,1,1.54,1.28L31.13,36H35a1,1,0,0,1,.77,1.64Z"
                                    ></path>
                                </svg>
                                <h3
                                    class="mt-8 text-lg font-semibold text-black dark:text-gray-100 group-hover:text-white"
                                >
                                    MAR - Laboratorio de medio ambiente y
                                    recursos naturales
                                </h3>
                                <p
                                    class="mt-4 text-base text-gray-600 dark:text-gray-200 group-hover:text-white"
                                >
                                    Es un espacio dedicado al estudio, análisis
                                    y monitoreo de diversos aspectos
                                    relacionados con el medio ambiente y los
                                    recursos naturales.
                                </p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="transition-all duration-1000 bg-white dark:bg-slate-600 hover:bg-blue-500 hover:shadow-xl m-2 p-4 relative z-10 group"
                        >
                            <div
                                class="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"
                            ></div>
                            <div class="py-2 px-9 relative">
                                <img
                                    src="./../../../assets/planta.svg"
                                    class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                />
                                <h3
                                    class="mt-8 text-lg font-semibold text-black dark:text-gray-100 group-hover:text-white"
                                >
                                    QAN - Lab de Química de Alimentos
                                </h3>
                                <p
                                    class="mt-4 text-base text-gray-600 dark:text-gray-200 group-hover:text-white"
                                >
                                    En este laboratorio se realizan diversas
                                    actividades relacionadas con la
                                    investigación y el diagnóstico, control de
                                    calidad de alimentos, aguas y sueros,
                                    contribuyendo así a la protección de los
                                    cultivos y la seguridad alimentaria.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import CurrentRouter from '../components/CurrentRouter.vue'
export default {
    components: { CurrentRouter },
}
</script>
