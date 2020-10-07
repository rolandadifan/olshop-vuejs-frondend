<template>
  <div class="home">
    <Header />
    <Hero />
    <Banner />
    <Instagram />
    <Patnerlogo />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Banner from "@/components/Banner.vue";
import Instagram from "@/components/Instagram.vue";
import Patnerlogo from "@/components/Patnerlogo.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
    Banner,
    Instagram,
    Patnerlogo,
    Footer,
  },
};
</script>
