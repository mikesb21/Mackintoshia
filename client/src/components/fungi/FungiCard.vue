<template>
  <v-card height="425" width="400" color="#CDD7C3" rounded>
    <v-img height="350" width="400" :src="fungi.images[0].image" />
    <v-card-title>
      <router-link
        :to="'/fungi/' + fungi._id"
        class="no-text-decoration funky-title-secondary"
      >
        🏷 {{ fungi.binomial_name }}
      </router-link>
    </v-card-title>
    <v-card-subtitle style="color: white">
      🍄 {{ fungi.scientific_classification.species }}
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
// Vue
import { Vue, Component, Prop } from "vue-property-decorator";

// Types
import { Fungi } from "../../interfaces/index";

@Component({
  name: "FungiCard",
})
class FungiCard extends Vue {
  @Prop(Object) readonly fungi!: Fungi;
}
export default FungiCard;
</script>
