<template>
  <v-app>
    <v-container>
      <h1 class="my-5">Detalle de la carta: {{ getCardDetalle(this.$route.params.id).name }}</h1>
      <v-card>
        Name: {{ getCardDetalle(this.$route.params.id).name }} <br />
        ManaCost: {{ getCardDetalle(this.$route.params.id).manaCost }} <br />
        Cmc: {{ getCardDetalle(this.$route.params.id).cmc }}<br />
        Colors: {{ getCardDetalle(this.$route.params.id).colors }}<br />
        ColorIdentity: {{ getCardDetalle(this.$route.params.id).colorIdentity }}<br />
        Type: {{ getCardDetalle(this.$route.params.id).type }}<br />
        Types: {{ getCardDetalle(this.$route.params.id).types }}<br />
        Subtypes: {{ getCardDetalle(this.$route.params.id).subtypes }}<br />
        Rarity: {{ getCardDetalle(this.$route.params.id).rarity }}<br />
        Set: {{ getCardDetalle(this.$route.params.id).set }}<br />
        SetName: {{ getCardDetalle(this.$route.params.id).setName }} <br />
        Text: {{ getCardDetalle(this.$route.params.id).text }}<br />
        Artist: {{ getCardDetalle(this.$route.params.id).artist }}<br />
        Number: {{ getCardDetalle(this.$route.params.id).number }} <br />
        Power: {{ getCardDetalle(this.$route.params.id).power }} <br />
        Toughness: {{ getCardDetalle(this.$route.params.id).toughness }} <br />
        Layout: {{ getCardDetalle(this.$route.params.id).layout }} <br />
        Multiverseid: {{ getCardDetalle(this.$route.params.id).multiverseid }}<br />
        ImageUrl: {{ getCardDetalle(this.$route.params.id).imageUrl }} <br />
        Variations: {{ getCardDetalle(this.$route.params.id).variations }} <br />
        ForeignNames: {{ getCardDetalle(this.$route.params.id).foreignNames[1] }} <br />
        Printings: {{ getCardDetalle(this.$route.params.id).printings }} <br />
        OriginalText: {{ getCardDetalle(this.$route.params.id).originalText }} <br />
        OriginalType: {{ getCardDetalle(this.$route.params.id).originalType }} <br />
        Legalities: {{ getCardDetalle(this.$route.params.id).legalities }} <br />
        Id: <br />
      </v-card>
      <v-btn :to="`/cursos`" class="my-4">Volver</v-btn>
    </v-container>
  </v-app>
</template>

<script>
//import router from "@router"
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      data: {
        detalle: [],
      },
    };
  },
  methods: {
    ...mapActions(["getData"]),
  },
  async created() {
    this.getData();
    //this.detalle= await this.getCardDetalle( this.$route.params.id )
  },
  computed: {
    ...mapGetters(["getCardDetalle"]),
  },
};
</script>