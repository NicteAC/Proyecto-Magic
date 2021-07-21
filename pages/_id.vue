<template>
  <v-app>
    <v-container>
      <h1 class="textDetailTitle my-5 ">
        Detalle de la carta:
        <span class="textTitle font-italic">{{
          getCardDetail(this.$route.params.id).name
        }}</span>
      </h1>

      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Name: </strong></v-col
        ><v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).name }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>ManaCost: </strong></v-col>
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).manaCost }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Cmc: </strong></v-col>
        <v-col class="textDescription">{{
          getCardDetail(this.$route.params.id).cmc
        }}</v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Colors: </strong></v-col>
        <v-col class="textDescription">{{
          getCardDetail(this.$route.params.id).colors 
        }}</v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"
          ><strong>ColorIdentity: </strong></v-col
        >
        <v-col class="textDescription">{{
          getCardDetail(this.$route.params.id).colorIdentity 
        }}</v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Type: </strong></v-col>
        <v-col class="textDescription">{{
          getCardDetail(this.$route.params.id).type
        }}</v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Types: </strong></v-col>
        <v-col class="textDescription">{{
          getCardDetail(this.$route.params.id).types 
        }}</v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Subtypes: </strong></v-col>
        <v-col class="textDescription">{{
          getCardDetail(this.$route.params.id).subtypes 
        }}</v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Rarity: </strong></v-col>
        <v-col class="textDescription">{{
          getCardDetail(this.$route.params.id).rarity
        }}</v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Set: </strong></v-col>
        <v-col class="textDescription">{{
          getCardDetail(this.$route.params.id).set
        }}</v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>SetName: </strong></v-col>
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).setName }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Text: </strong></v-col>
        <v-col class="textDescription">{{
          getCardDetail(this.$route.params.id).text
        }}</v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Artist: </strong></v-col>
        <v-col class="textDescription">{{
          getCardDetail(this.$route.params.id).artist
        }}</v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Number: </strong></v-col>
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).number }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Power: </strong></v-col>
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).power }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Toughness: </strong></v-col>
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).toughness }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Layout: </strong></v-col>
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).layout }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"
          ><strong>Multiverseid: </strong></v-col
        >
        <v-col class="textDescription">{{
          getCardDetail(this.$route.params.id).multiverseid
        }}</v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Variations: </strong></v-col>
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).variations  }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"
          ><strong>ForeignNames: </strong></v-col
        >
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).foreignNames[1] }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Printings: </strong></v-col>
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).printings }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"
          ><strong>OriginalText: </strong></v-col
        >
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).originalText }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"
          ><strong>OriginalType: </strong></v-col
        >
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).originalType }}
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="textDetail" cols="2"><strong>Legalities: </strong></v-col>
        <v-col class="textDescription"
          >{{ getCardDetail(this.$route.params.id).legalities }}
        </v-col>
      </v-row>
      <v-btn :to="`/`" class="my-4">Volver</v-btn>
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
        detail: [],
      },
    };
  },
  methods: {
    ...mapActions(["getData"]),
  },
  async created() {
    this.getData();
    //this.detalle= await this.getCardDetail( this.$route.params.id )
  },
  computed: {
    ...mapGetters(["getCardDetail"]),
  },
};
</script>