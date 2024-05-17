import { ref } from 'vue'

const myNavbar = () => {
    const showMenuPlanes = ref(false)
    const showMobileMenu = ref(false)

    const scrollToSection = (sectionId) => {
        showMobileMenu.value = false
        const section = document.getElementById(sectionId)
        const sectionOffsetTop = section.offsetTop

        window.scrollTo({
            top: sectionOffsetTop,
            behavior: 'smooth',
        })
    }

    return { scrollToSection, showMenuPlanes, showMobileMenu }
}

export default myNavbar
