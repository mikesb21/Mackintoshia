<template>
  <v-container style="background-color: #CDD7C3">
    <v-card color="#CDD7C3" elevation="5">
      <v-card-title>🏷 Binomial Name</v-card-title>
      <v-card-text>{{ binomialName }}</v-card-text>
      <v-card-title>🗒 Description</v-card-title>
      <v-card-text>{{ description }}</v-card-text>
      <v-card-title>🌲 Habitat</v-card-title>
      <v-card-text>{{ habitat }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
// Vue
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "FungiBasicInformation",
})
class FungiBasicInformation extends Vue {
  @Prop(String) readonly binomialName!: string;

  @Prop(String) readonly description!: string;

  @Prop(String) readonly habitat!: string;
}
export default FungiBasicInformation;
</script>
