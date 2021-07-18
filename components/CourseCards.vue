<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(card, i) of arrayApi.cards" :key="i" class="my-4" md="4">                        
          <v-img
            :src="card.imageUrl"
            class="grey--text"
            height="500px"
            width="360px"
          >
            <v-card-title v-text="card.name"></v-card-title>
          </v-img>      
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      arrayApi: {
        data: {}
      },
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