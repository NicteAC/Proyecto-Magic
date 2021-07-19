<template>
  <v-toolbar color="orange accent-1">
    <v-app-bar-nav-icon class="hidden-sm-and-down"></v-app-bar-nav-icon>
    <v-toolbar-title class="text-h6 mr-6 hidden-sm-and-down">
      Cryptocurrency
    </v-toolbar-title>
    <v-autocomplete
      v-model="model"
      :cards="cards"
      :loading="isLoading"
      :search-input.sync="search"
      chips
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="symbol"
      label="Search for a coin..."
      solo
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title>
            Search for your favorite
            <strong>Cryptocurrency</strong>
          </v-list-item-title>
        </v-list-item>
      </template>
      <template v-slot:selection="{ attr, on, cards, selected }">
        <v-chip
          v-bind="attr"
          :input-value="selected"
          color="blue-grey"
          class="white--text"
          v-on="on"
        >
          <v-icon left> mdi-bitcoin </v-icon>
          <span v-text="cards.name"></span>
        </v-chip>
      </template>
      <template v-slot:item="{ cards }">
        <v-list-item-avatar
          color="indigo"
          class="text-h5 font-weight-light white--text"
        >
          {{ cards.name.charAt(0) }}
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-bitcoin</v-icon>
        </v-list-item-action>
      </template>
    </v-autocomplete>
    <template v-slot:extension>
      <v-tabs
        v-model="tab"
        :hide-slider="!model"
        color="blue-grey"
        slider-color="blue-grey"
      >
        <v-tab :disabled="!model"> News </v-tab>
        <v-tab :disabled="!model"> Trading </v-tab>
        <v-tab :disabled="!model"> Blog </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    isLoading: false,
    cards: [],
    model: null,
    search: null,
    tab: null,
  }),

  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search(val) {
      // Items have already been loaded
      if (this.cards.length > 0) return;

      this.isLoading = true;

      // Lazily load input card
      fetch("https://api.magicthegathering.io/v1/cards")
        .then((res) => res.clone().json())
        .then((res) => {
          this.cards = res;
          console.log(this.cards.name)
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>