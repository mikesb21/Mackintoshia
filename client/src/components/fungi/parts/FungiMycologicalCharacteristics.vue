<template>
  <v-container style="background-color: #CDD7C3">
    <v-card flat color="#CDD7C3" elevation="5">
      <v-card-title>📋 Mycological Characteristics</v-card-title>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-title>
            {{ mycologicalCharacteristics.gills.description }}
          </v-list-item-title>
          <v-list-item-avatar
            v-for="image in mycologicalCharacteristics.gills.images"
            :key="image"
          >
            <v-img :src="image" />
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            {{ mycologicalCharacteristics.cap.description }}
          </v-list-item-title>
          <v-list-item-avatar
            v-for="image in mycologicalCharacteristics.cap.images"
            :key="image"
          >
            <v-img :src="image" />
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            {{ mycologicalCharacteristics.hymenium.description }}
          </v-list-item-title>
          <v-list-item-avatar
            v-for="image in mycologicalCharacteristics.hymenium.images"
            :key="image"
          >
            <v-img :src="image" />
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            {{ mycologicalCharacteristics.stipe.description }}
          </v-list-item-title>
          <v-list-item-avatar
            v-for="image in mycologicalCharacteristics.stipe.images"
            :key="image"
          >
            <v-img :src="image" />
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            {{ mycologicalCharacteristics.spore.description }}
          </v-list-item-title>
          <v-list-item-avatar
            v-for="image in mycologicalCharacteristics.spore.images"
            :key="image"
          >
            <v-img :src="image" />
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            {{ mycologicalCharacteristics.ecology.description }}
          </v-list-item-title>
          <v-list-item-avatar
            v-for="image in mycologicalCharacteristics.ecology.images"
            :key="image"
          >
            <v-img :src="image" />
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            {{ mycologicalCharacteristics.edibility.description }}
          </v-list-item-title>
          <v-list-item-avatar
            v-for="image in mycologicalCharacteristics.edibility.images"
            :key="image"
          >
            <v-img :src="image" />
          </v-list-item-avatar>
        </v-list-item>
      </v-list-item-group>
    </v-card>
  </v-container>
</template>

<script lang="ts">
// Vue
import { Vue, Component, Prop } from "vue-property-decorator";

// Types
import { MycologicalCharacteristics } from "../../../interfaces";

@Component({
  name: "FungiMycologicalCharacteristics",
})
class FungiMycologicalCharacteristics extends Vue {
  @Prop(Object)
  readonly mycologicalCharacteristics!: MycologicalCharacteristics;
}
export default FungiMycologicalCharacteristics;
</script>
