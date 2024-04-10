<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <router-view></router-view>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>
