<template>
  <v-app-bar color="#FFFFFF" elevate-on-scroll height="80">
    <v-card class="ma-4">
      <v-card-title>Logo 404</v-card-title>
    </v-card>
    <v-layout justify-end />
      <span>Inicio - Cursos</span>
      <v-btn class="ma-4" outlined large fab color="indigo">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
  </v-app-bar>
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