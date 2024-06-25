<template>
    <div
        class="bg-gray-200 dark:bg-slate-700 dark:text-gray-300 p-3 rounded-md shadow-md"
    >
        <p class="text-sm">
            <span class="font-semibold">{{ currentRoute }}</span>
        </p>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const currentRoute = computed(() => route.fullPath)

        return {
            currentRoute,
        }
    },
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si lo deseas */
</style>
