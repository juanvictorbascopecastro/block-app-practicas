import { onMounted, ref } from 'vue'

const myApp = () => {
    const isDark = ref(null)

    onMounted(() => {
        isDark.value = document.querySelector('html').classList.contains('dark')
            ? true
            : false
    })

    const modeDark = () => {
        const htmlElement = document.querySelector('html')

        if (htmlElement.classList.contains('dark')) {
            document.querySelector('html').classList.remove('dark')
            isDark.value = false
        } else {
            document.querySelector('html').classList.add('dark')
            isDark.value = true
        }
    }

    return { modeDark, isDark }
}

export default myApp
