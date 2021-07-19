<template>
  <v-app>
    <v-container>
      <h1>Detalle del curso: {{ $route.params.id }}</h1>
      <v-card>
        Name: <br />
        ManaCost: <br />
        Cmc: <br />
        Colors: <br />
        ColorIdentity: <br />
        Type: <br />
        Types: <br />
        Subtypes: <br />
        Rarity: <br />
        Set: <br />
        SetName: <br />
        Text: <br />
        Artist: <br />
        Number: <br />
        Power: <br />
        Toughness: <br />
        Layout: <br />
        Multiverseid: <br />
        ImageUrl: <br />
        Variations: <br />
        ForeignNames: <br />
        Printings: <br />
        OriginalText: <br />
        OriginalType: <br />
        Legalities: <br />
        Id: <br />
      </v-card>
      <v-btn :to="`/cursos`" class="my-4">Volver</v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>