<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row>
        <v-col v-for="card in arrayApi" :key="card.cards" cols="4">
          <v-card>
            <v-img
              :src="card.cards"
              class="white--text"
              height="500px"
              width="360px"
            >
              <v-card-title v-text="card.name"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      arrayApi: {},
    };
  },
  methods: {
    async callingApi() {
      try {
        const data = await fetch(`https://api.magicthegathering.io/v1/cards`);
        const objeto = await data.json();
        console.log(objeto);
        this.arrayApi = objeto;
      } catch (error) {}
    },
  },
  created() {
    this.callingApi();
  },
};
</script>