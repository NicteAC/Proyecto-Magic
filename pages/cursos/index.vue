<template>
  <v-app>
    <v-breadcrumbs :items="items" divider="/" class="link"></v-breadcrumbs>
    <v-container md="6">
      <h1 class="text-center">Cursos</h1>
      <div id="line"></div>
      <v-col align-center justify-center fill-height class="Text">
        <p class="text-center my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vero,
          dicta dolores dolor ex doloribus laboriosam distinctio non labore
          nesciunt itaque consectetur ullam maxime libero nostrum accusantium
          veritatis accusamus. Numquam.
        </p>
      </v-col>
    </v-container>

    <v-container>
      <v-app>
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
            <v-toolbar color="#a0c4ff" class="mb-4" height="105">
              <div class="mx-4">Filtra por:</div>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="keys"
                prepend-inner-icon="mdi-magnify"
                label="Idioma"
              ></v-select>
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="keys"
                prepend-inner-icon="mdi-magnify"
                label="Tipo"
              ></v-select>
              <v-spacer></v-spacer>
              <div class="mx-4">Busqueda:</div>
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Buscador"
              ></v-text-field>

              <v-spacer></v-spacer>

              <v-btn class="ma-2" elevation="8" rounded> Buscar </v-btn>
            </v-toolbar>

            <span class="mdi mdi-clipboard-list-outline m-4">
              X Colecciones disponibles para tu selección</span
            >
            <CourseCards />
          </template>
        </v-data-iterator>
      </v-app>
    </v-container>
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
      keys: ["Type"],
      items: [
        {
          text: "Inicio",
          disabled: false,
          href: "/",
        },
        {
          text: "Cursos",
          disabled: false,
          href: "cursos",
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
