<template>
  <v-container style="background-color: #CDD7C3">
    <v-card elevation="5">
      <v-simple-table dense style="background-color: #CDD7C3">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Reference Name
              </th>
              <th class="text-left">
                Image
              </th>
              <th class="text-left">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="variant in variants" :key="variant._id">
              <td>{{ variant.referenceName }}</td>
              <td>
                <v-img :src="variant.image" height="150" width="150" />
              </td>
              <td>{{ variant.description }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>
<script lang="ts">
// Vue
import { Vue, Prop, Component } from "vue-property-decorator";

// Types
import { Variant } from "../../../interfaces";

@Component({
  name: "FungiVariants",
})
class FungiVariants extends Vue {
  @Prop(Array) readonly variants!: Array<Variant>;
}
export default FungiVariants;
</script>

<style lang="scss">
tbody {
  tr:hover {
    background-color: transparent !important;
  }
}
</style>
