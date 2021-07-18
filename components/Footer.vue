<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title>
        <a class="ma-2" href="#">Terminos y condiciones</a>
        <a class="ma-2" href="#">Privacidad</a>
        <a class="ma-2" href="#">Soporte</a>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
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