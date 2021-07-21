<template>
  <v-app>
    <v-toolbar height="80" color="#a0c4ff">
      <v-app-bar-nav-icon class="hidden-sm-and-down"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-h6 mr-6 hidden-sm-and-down">
        <strong>Busca tu carta:</strong>
      </v-toolbar-title>
      <v-autocomplete
        v-model="model"
        :items="cards"
        :loading="isLoading"
        :search-input.sync="search"
        chips
        clearable
        hide-details
        hide-selected
        item-text="type"
        item-value="symbol"
        label="Busca tu carta"
        solo
        @change="getFiltro"
      >
        <template v-slot:selection="{ attr, on, item, selected }">
          <v-chip
            v-bind="attr"
            :input-value="selected"
            color="blue-grey"
            class="white--text"
            v-on="on"
          >
            <v-icon left> mdi-information-variant </v-icon>
            <span v-text="item.type"></span>
          </v-chip>
        </template>
        <template v-slot:item="{ item }">
          <v-list-item-avatar
            color="indigo"
            class="text-h5 font-weight-light white--text"
          >
            {{ item.type.charAt(0) }}
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
            <v-list-item-subtitle v-text="item.type"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-cards-outline</v-icon>
          </v-list-item-action>
        </template>
      </v-autocomplete>
    </v-toolbar>
    <v-container class="container-fluid">
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <span class="mdi mdi-clipboard-list-outline my-5">{{cartas.length}} Colecciones disponibles para tu selección</span>
      <v-row>
        
        <v-col v-for="(card, i) of cartas" :key="i" class="my-4" md="3">
          <v-card :to="`/${card.id}`">
            <v-img v-if="card.imageUrl" :src="card.imageUrl">
              <v-btn
                class="button-type-active my-10 mx-2"
                rounded
                x-small
                v-text="card.type"
                elevation="2"
              ></v-btn>
            </v-img>
            <v-img
              v-else
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRveklfC4eFp6gOv8wVjxlBQtFK5WkcImk-Eai_3WpdMavAQ5e_-AmgpCWnKPysIq1zQM&usqp=CAU"
            >
              <v-btn
                class="button-type-disable my-10 mx-2"
                disabled
                rounded
                x-small
                v-text="card.type"
                elevation="2"
              ></v-btn>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Id",
  data: () => ({
    cartas: [],
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null,
    overlay: true,
  }),
  created() {
    this.getData();
  },
  methods: {
    ...mapActions(["getData"]),

    getFiltro() {
      this.cartas = this.getCard(this.model);
    },
  },
  computed: {
    ...mapState(["cards"]),
    ...mapGetters(["getCard"]),
  },
  async mounted() {
    //  this.getData();
    const carga = Promise.all([await this.getData()]);
    if (carga) {
      this.overlay = false;
      this.cartas = await this.getCard();
    }
  },

  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;
      this.isLoading = true;
    },
  },
};
</script>