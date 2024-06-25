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
            <div className="p-4">
                <h1 className="text-lg font-semibold">About Macbook</h1>
                <p className="mt-3 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                </p>
                <button
                    type="button"
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Read
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import CurrentRouter from '../components/CurrentRouter.vue'
export default {
    components: { CurrentRouter },
}
</script>
