<template>
    <div class="flex items-center justify-center">
        <div class="relative inline-block text-left">
            <li
                class="duration-200 cursor-pointer flex"
                @click="toggleDropdown"
            >
                {{ title }}
                <i class="bi bi-chevron-right ml-2" v-if="!open"></i>
                <i class="bi bi-chevron-down ml-2" v-else></i>
            </li>
            <div
                v-if="open"
                @click.away="closeDropdown"
                class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 px-2 py-2"
            >
                <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >Save</a
                >
                <div class="relative">
                    <button
                        @click="toggleSubMenu"
                        class="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 relative rounded-md"
                    >
                        Share to
                        <svg
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="h-5 w-5 ml-2"
                            transform="matrix(1, 0, 0, 1, 0, 0)rotate(270)"
                        >
                            <path
                                d="M24,27.2,13.4,16.6a1.9,1.9,0,0,0-3,.2,2.1,2.1,0,0,0,.2,2.7l12,11.9a1.9,1.9,0,0,0,2.8,0l12-11.9a2.1,2.1,0,0,0,.2-2.7,1.9,1.9,0,0,0-3-.2Z"
                            ></path>
                        </svg>
                    </button>
                    <div
                        v-if="subMenuOpen"
                        @click.away="closeSubMenu"
                        class="absolute top-0 left-full ml-4 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 px-2 py-2"
                    >
                        <a
                            target="_blank"
                            rel="noopener"
                            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah&amp;text="
                            class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Twitter</a
                        >
                        <a
                            target="_blank"
                            rel="noopener"
                            href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Facebook</a
                        >
                        <a
                            target="_blank"
                            rel="noopener"
                            href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah&amp;title=&amp;summary=&amp;source=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >LinkedIn</a
                        >
                        <a
                            target="_blank"
                            rel="noopener"
                            href="https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=&amp;caption=&amp;content=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah&amp;canonicalUrl=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah&amp;shareSource=tumblr_share_button"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Tumblr</a
                        >
                        <a
                            target="_blank"
                            rel="noopener"
                            href="https://reddit.com/submit/?url=https%3A%2F%2Ftailwindcomponents.com%2Fu%2Fdhaifullah&amp;resubmit=true&amp;title="
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Reddit</a
                        >
                        <!-- Add more sub-menu items as needed -->
                    </div>
                </div>
                <a
                    href="#"
                    class="block px-4 py-2 text-sm text-red-500 hover:bg-red-100 rounded-md"
                    >Report</a
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String, default: '' },
        icon: { type: String, default: 'home' },
    },
    data() {
        return {
            open: true,
            subMenuOpen: true,
        }
    },
    methods: {
        toggleDropdown() {
            this.open = !this.open
        },
        closeDropdown() {
            this.open = false
        },
        toggleSubMenu() {
            this.subMenuOpen = !this.subMenuOpen
        },
        closeSubMenu() {
            this.subMenuOpen = false
        },
    },
}
</script>

<style scoped>
/* Aquí puedes agregar estilos personalizados si lo deseas */
</style>
