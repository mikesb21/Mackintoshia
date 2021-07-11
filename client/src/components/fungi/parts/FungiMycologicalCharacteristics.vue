<template>
  <v-card flat>
    <v-card-title>📋 Mycological Characteristics</v-card-title>
    <v-list-item-group>
      <v-list-item
        v-for="mycologicalCharacteristic in mycologicalCharacteristics"
        :key="mycologicalCharacteristic._id"
      >
        <v-list-item-title>
          {{ mycologicalCharacteristic.description }}
        </v-list-item-title>
        <v-list-item-avatar
          v-for="image in mycologicalCharacteristic.images"
          :key="image"
        >
          <v-img :src="image" />
        </v-list-item-avatar>
      </v-list-item>
    </v-list-item-group>
  </v-card>
</template>

<script lang="ts">
// Vue
import { Vue, Component, Prop } from "vue-property-decorator";

// Types
import { MycologicalCharacteristic } from "../../../interfaces";

@Component({
  name: "FungiMycologicalCharacteristics",
})
class FungiMycologicalCharacteristics extends Vue {
  @Prop(Array) readonly mycologicalCharacteristics!: Array<
    MycologicalCharacteristic
  >;
}
export default FungiMycologicalCharacteristics;
</script>
