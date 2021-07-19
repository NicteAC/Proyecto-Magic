<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title>
        <a href="#" class="link_footer ma-2">Terminos y condiciones</a>
        <a href="#" class="link_footer ma-2">Privacidad</a>
        <a href="#" class="link_footer ma-2">Soporte</a>

        <v-spacer></v-spacer>

        <a href="#" class="link_footer">Socialab.cl</a>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-youtube",
      "mdi-instagram",
      "mdi-linkedin",
    ],
  }),
};
</script>