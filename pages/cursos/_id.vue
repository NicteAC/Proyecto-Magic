<template>
  <div>
    <v-container>
      <h1>Detalle del curso: {{ $route.params.id }}</h1>
      <v-row>
        <v-col v-for="(card, i) in getData" :key="i" class="my-4">
          <v-card :to="`/cursos/${card.name}`">
            <v-img :src="card.imageUrl" class="indigo--text"
              ><v-btn
                class="ma-3"
                rounded
                x-small
                v-text="card.name"
                elevation="2"
              ></v-btn>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    ...mapActions(["getData"]),
  },
};
</script>