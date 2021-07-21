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
      
      <CourseCards />
    </v-container>
  </v-app>
</template>

<script>
import CourseCards from "~/components/CourseCards.vue";
import { mapState } from "vuex";
export default {
  components: { CourseCards },
  data() {
    return {
      items: [
        {
          text: "Inicio",
          disabled: false,
          href: "#",
        },
        {
          text: "Cursos",
          disabled: false,
          href: "#",
        },
      ],
    };
  },
  computed: {

  },
  methods: {

  },
};
</script>
