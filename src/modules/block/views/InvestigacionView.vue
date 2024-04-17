<template>
    <div class="min-h-screen bg-indigo-50">
        <main>
            <div class="container w-full md:px-40 mx-auto py-20">
                <div
                    class="md:grid lg:grid-cols-3 md:grid-cols-2 mlg:grid-cols-3 md:gap-10 space-y-6 md:space-y-0 px-10 md:px-0 mx-auto"
                >
                    <div class="bg-white p-6 shadow-md rounded-md">
                        <h3 class="text-xl text-gray-800 font-semibold mb-3">
                            greek salad
                        </h3>
                        <p class="mb-2">10 minutes to make</p>
                        <p class="my-4">blah blah blah</p>
                        <button
                            class="text-lg font-semibold text-gray-700 bg-indigo-100 px-4 py-1 block mx-auto rounded-md"
                        >
                            Cook This
                        </button>
                    </div>
                    <div class="bg-white p-6 shadow-md rounded-md">
                        <h3 class="text-xl text-gray-800 font-semibold mb-3">
                            greek salad
                        </h3>
                        <p class="mb-2">10 minutes to make</p>
                        <p class="my-4">blah blah blah</p>
                        <button
                            class="text-lg font-semibold text-gray-700 bg-indigo-100 px-4 py-1 block mx-auto rounded-md"
                        >
                            Cook This
                        </button>
                    </div>
                    <div class="bg-white p-6 shadow-md rounded-md">
                        <h3 class="text-xl text-gray-800 font-semibold mb-3">
                            Victor
                        </h3>
                        <p class="mb-2">10 minutes to make</p>
                        <p class="my-4">blah blah blah</p>
                        <button
                            class="text-lg font-semibold text-gray-700 bg-indigo-100 px-4 py-1 block mx-auto rounded-md"
                        >
                            Cook This
                        </button>
                    </div>
                    <div class="bg-white p-6 shadow-md rounded-md">
                        <h3 class="text-xl text-gray-800 font-semibold mb-3">
                            greek salad
                        </h3>
                        <p class="mb-2">10 minutes to make</p>
                        <p class="my-4">blah blah blah</p>
                        <button
                            class="text-lg font-semibold text-gray-700 bg-indigo-100 px-4 py-1 block mx-auto rounded-md"
                        >
                            Cook This
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import { TYPE_MONEY } from '../../../common/contants'
export default {
    setup() {
        const prueba1 = () => {}
        return { prueba1, TYPE_MONEY }
    },
}
</script>
