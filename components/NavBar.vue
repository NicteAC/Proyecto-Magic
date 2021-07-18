<template>
  <div>
    <v-app-bar color="#FFFFFF" elevate-on-scroll height="80">
      <ImageSocialab class="mx-2" />
      <ImageBootcamp />
      <v-layout justify-end />
      <a class="ma-2" href="/">Inicio</a>
      <a class="ma-2" href="/cursos">Cursos</a>
      <v-btn class="ma-4" outlined large fab color="indigo">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: ["Inicio", "Cursos"],
    };
  },
};
</script>