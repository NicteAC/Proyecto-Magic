<template>
  <v-container class="container-fluid">
    <v-row>
      <v-col v-for="(card, i) of arrayApi.cards" :key="i" class="my-4" md="3">
        <v-card :to="`/cursos/${card.name}`">
          <v-img v-if="card.imageUrl" :src="card.imageUrl">
            <v-btn class="button-type-active my-10 mx-2" rounded x-small v-text="card.type" elevation="2"></v-btn>
          </v-img>
          <v-img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRveklfC4eFp6gOv8wVjxlBQtFK5WkcImk-Eai_3WpdMavAQ5e_-AmgpCWnKPysIq1zQM&usqp=CAU">
            <v-btn class="button-type-disable my-10 mx-2" disabled rounded x-small v-text="card.type" elevation="2"></v-btn>
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