<template>
  <v-simple-table>
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
          <td>{{ variant.reference_name }}</td>
          <td>
            <v-img :src="variant.image" height="150" width="150" />
          </td>
          <td>{{ variant.description }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
