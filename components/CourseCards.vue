<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(card, i) of arrayApi.cards" :key="i" class="my-4" md="4">
        <v-card  href="#">
        <v-img
          :src="card.imageUrl"
          class="indigo--text"
          height="500px"
          width="360px"
          ><v-btn class="ma-3" rounded x-small v-text="card.name" elevation="2"></v-btn>
        </v-img>        
        </v-card>
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
        data: {},
      },
    };
  },
  methods: {
    async callingApi() {
      try {
        const data = await fetch(`https://api.magicthegathering.io/v1/cards`);
        const object = await data.json();
        this.arrayApi = object;
      } catch (error) {}
    },
  },
  created() {
    this.callingApi();
  },
};
</script>