<template>
  <v-app>
    <v-toolbar class="filter" max-height="70">
      <v-toolbar-title class="text-h6 mr-6 hidden-sm-and-down">
        <strong>Filtra tu carta por tipo:</strong>
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
            color="indigo"
            :input-value="selected"
            class="white--text"
            v-on="on"
          >
            <v-icon left> mdi-information-variant </v-icon>
           {{'Tipo: ' + ' '}}
            <span v-text="`${' '} ${item.type}`"></span>
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
            <v-list-item-title v-text="item.type"></v-list-item-title>
            <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-cards-outline</v-icon>
          </v-list-item-action>
        </template>
      </v-autocomplete>
    </v-toolbar>
    <v-container>
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <span class="mdi mdi-clipboard-list-outline my-5">{{allCards.length}} Colecciones disponibles para tu selección</span>
      <v-row class="container-fluid">        
        <v-col v-for="(card, i) of allCards" :key="i" class="my-4" md="3">
          <v-card :to="`/${card.id}`" height="480" class="my-5">
            <v-img v-if="card.imageUrl" :src="card.imageUrl" max-height="400">
              <v-btn
                class="button-type-active mt-10 mx-2"
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
                class="button-type-disable mt-10 mx-2"
                disabled
                rounded
                x-small
                v-text="card.type"
                elevation="2"
              ></v-btn>              
            </v-img>
            <p class="textCard">Nombre: {{card.name}}<br />Tipo: {{card.type}}</p>
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
    allCards: [],
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
      this.allCards = this.getCard(this.model);
    },
  },
  computed: {
    ...mapState(["cards"]),
    ...mapGetters(["getCard"]),
  },
  async mounted() {
    //  this.getData();
    const load = Promise.all([await this.getData()]);
    if (load) {
      this.overlay = false;
      this.allCards = await this.getCard();
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