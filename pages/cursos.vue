<template>
  <v-app>
    <v-container>
      <h1>Cursos</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vero, dicta
        dolores dolor ex doloribus laboriosam distinctio non labore nesciunt
        itaque consectetur ullam maxime libero nostrum accusantium veritatis
        accusamus. Numquam.
      </p>
      <hr />
      <br />
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <template v-slot:header>
          <v-toolbar dark color="#3434FF" class="mb-1">
            <div class="mr-5">Filtra por</div>
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="keys"
                prepend-inner-icon="mdi-magnify"
                label="Sort by"
              ></v-select>
            </template>
          </v-toolbar>
        </template>

        <CourseCards />

        <template v-slot:footer>
          <v-row class="ma-2" align="center" justify="center">
            <span class="grey--text">Items por pagina</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  text
                  color="primary"
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-spacer></v-spacer>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
    <div class="text-center">
      <v-pagination v-model="page" :length="4" circle></v-pagination>
    </div>
  </v-app>
</template>

<script>
import CourseCards from "~/components/CourseCards.vue";
export default {
  components: { CourseCards },
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "name",
      keys: ["Name", "Calories", "Fat"],
      items: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
        },
        {
          name: "holo",
          calories: 518,
          fat: 26.0,
        },
        {
          name: "chao",
          calories: 518,
          fat: 26.0,
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>
