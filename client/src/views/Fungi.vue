<template>
  <v-container>
    <v-card>
      <v-parallax dark height="300" :src="currentFungi.images[0].image">
        <v-card-title class="d-flex justify-center">
          <h1 class="funky-title">
            {{ currentFungi.binomial_name }}
          </h1>
        </v-card-title>
      </v-parallax>
    </v-card>
    <br />
    <v-card color="#CDD7C3">
      <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab>
          Basic Information
        </v-tab>
        <v-tab>
          Scientific Classification
        </v-tab>
        <v-tab>
          Mycological Characteristics
        </v-tab>
        <v-tab v-if="currentFungi.variants.length > 0">
          Variants
        </v-tab>
        <v-tab v-if="currentFungi.images.length > 0">
          Images
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <FungiBasicInformation
            :binomialName="currentFungi.binomial_name"
            :description="currentFungi.description"
            :habitat="currentFungi.habitat"
          />
        </v-tab-item>
        <v-tab-item>
          <FungiScientificClassification
            :scientificClassification="currentFungi.scientific_classification"
          />
        </v-tab-item>
        <v-tab-item>
          <FungiMycologicalCharacteristics
            :mycologicalCharacteristics="
              currentFungi.mycological_characteristics
            "
          />
        </v-tab-item>
        <v-tab-item v-if="currentFungi.variants.length > 0">
          <FungiVariants :variants="currentFungi.variants" />
        </v-tab-item>
        <v-tab-item v-if="currentFungi.images.length > 0">
          <FungiImages :images="currentFungi.images" />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts">
// Vue
import { Vue, Component } from "vue-property-decorator";
import { mapState, mapMutations } from "vuex";

// Apis
import FungiApi from "../apis/fungi-api";

// Components
import FungiBasicInformation from "../components/fungi/parts/FungiBasicInformation.vue";
import FungiScientificClassification from "../components/fungi/parts/FungiScientificClassification.vue";
import FungiImages from "../components/fungi/parts/FungiImages.vue";
import FungiMycologicalCharacteristics from "../components/fungi/parts/FungiMycologicalCharacteristics.vue";
import FungiVariants from "../components/fungi/parts/FungiVariants.vue";

@Component({
  name: "Fungi",
  components: {
    FungiImages,
    FungiBasicInformation,
    FungiScientificClassification,
    FungiMycologicalCharacteristics,
    FungiVariants,
  },
  methods: {
    ...mapMutations(["setCurrentFungi", "updateLoading"]),
  },
  computed: {
    ...mapState(["fungiList", "currentFungi"]),
  },
})
class Fungi extends Vue {
  tab = null;

  fungiApi = new FungiApi();

  fungiId: string = this.$route.params.id;

  updateLoading!: Function;

  setCurrentFungi!: Function;

  fungiList!: Array<Fungi>;

  currentFungi!: Fungi;

  async mounted() {
    try {
      this.updateLoading(true);
      const fungi = await this.fungiApi.getFungi(this.fungiId);
      this.setCurrentFungi(fungi);
      this.updateLoading(false);
    } catch (error) {
      console.error(error);
    }
    console.log("Current Fungi", this.currentFungi);
  }
}
export default Fungi;
</script>
