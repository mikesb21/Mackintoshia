<template>
  <v-container style="background-color: #CDD7C3">
    <v-card color="#CDD7C3">
      <v-carousel interval="2000" hide-delimiters-background>
        <v-carousel-item
          v-for="(image, i) in images"
          :key="i"
          :src="image"
          contain
          reverse-transition="fade-transition"
          transition="fade-transition"
        />
      </v-carousel>
    </v-card>
  </v-container>
</template>

<script lang="ts">
// Vue
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "FungiImages",
})
class FungiImages extends Vue {
  @Prop(Array) readonly images!: Array<string>;
}
export default FungiImages;
</script>
