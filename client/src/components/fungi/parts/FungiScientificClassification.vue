<template>
  <v-container style="background-color: #CDD7C3">
    <v-card color="#CDD7C3" elevation="5">
      <!-- Add link preperty to v-list-item to make them clickable-->
      <v-list-item-group>
        <v-list-item>
          <v-list-item-avatar>🏰</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Kingdom</v-list-item-title>
            <v-list-item-subtitle>
              {{ scientificClassification.kingdom }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>🧱</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Division</v-list-item-title>
            <v-list-item-subtitle>
              {{ scientificClassification.division }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>🏛</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Class</v-list-item-title>
            <v-list-item-subtitle>
              {{ scientificClassification.class }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>📚</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Order</v-list-item-title>
            <v-list-item-subtitle>
              {{ scientificClassification.order }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>👨‍👩‍👧‍👦</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Family</v-list-item-title>
            <v-list-item-subtitle>
              {{ scientificClassification.family }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>🌲</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Genus</v-list-item-title>
            <v-list-item-subtitle>
              {{ scientificClassification.genus }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>🌱</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Species</v-list-item-title>
            <v-list-item-subtitle>
              {{ scientificClassification.species }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-card>
  </v-container>
</template>

<script lang="ts">
// Vue
import { Vue, Component, Prop } from "vue-property-decorator";

// Types
import { ScientificClassification } from "../../../interfaces";

@Component({
  name: "FungiScientificClassification",
})
class FungiScientificClassification extends Vue {
  @Prop(Object) readonly scientificClassification!: ScientificClassification;
}
export default FungiScientificClassification;
</script>
