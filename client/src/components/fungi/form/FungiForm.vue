<template>
  <v-container>
    <v-form ref="form">
      <v-container>
        <v-row no-gutters>
          <v-col class="form-container" color="blue" align="center">
            <h3 class="pb-2">Details</h3>
            <v-container>
              <v-text-field
                append-icon="mdi-mushroom"
                v-model="fungi.binomialName"
                label="Binomial Name"
                outlined
                clearable
                required
              />
              <v-textarea
                v-model="fungi.description"
                label="Description"
                outlined
                clearable
              />
              <v-textarea
                v-model="fungi.habitat"
                label="Habitat"
                outlined
                clearable
              />
            </v-container>
          </v-col>
          <v-col class="form-container" align="center">
            <h3 class="pb-2">Scientific Classification</h3>
            <v-container>
              <v-text-field
                v-model="fungi.scientificClassification.kingdom"
                label="Kingdom"
                value="Fungi"
                outlined
              />
              <v-text-field
                v-model="fungi.scientificClassification.division"
                label="Division"
                value="Basidiomycota"
                outlined
              />
              <v-text-field
                v-model="fungi.scientificClassification.class"
                label="Class"
                value="Agaricomycetes"
                outlined
              />
              <v-text-field
                v-model="fungi.scientificClassification.order"
                label="Order"
                value="Agaricales"
                outlined
              />
              <v-text-field
                v-model="fungi.scientificClassification.family"
                label="Family"
                outlined
              />
              <v-text-field
                v-model="fungi.scientificClassification.genus"
                label="Genus"
                outlined
                clearable
              />
              <v-text-field
                v-model="fungi.scientificClassification.species"
                label="Species"
                outlined
                clearable
              />
            </v-container>
          </v-col>
          <v-col class="form-container col-3" align="center">
            <h3 class="pb-2">Mycological Characteristics</h3>
            <v-col class="d-flex flex-column" cols="auto">
              <v-select
                :items="selects.GILLS"
                v-model="fungi.mycologicalCharacteristics.gills"
                label="Gills"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="selects.CAP"
                v-model="fungi.mycologicalCharacteristics.cap"
                label="Cap"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="selects.HYMENIUM"
                v-model="fungi.mycologicalCharacteristics.hymenium"
                label="Hymenium"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="selects.STIPE"
                v-model="fungi.mycologicalCharacteristics.stipe"
                label="Stipe"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="selects.SPORE"
                v-model="fungi.mycologicalCharacteristics.spore"
                label="Spore"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="selects.ECOLOGY"
                v-model="fungi.mycologicalCharacteristics.ecology"
                label="Ecology"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="selects.EDIBILITY"
                v-model="fungi.mycologicalCharacteristics.edibility"
                label="Edibility"
                item-text="description"
                return-object
                outlined
              />
            </v-col>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="form-container col-5" align="center">
            <h3 class="pb-2">Images</h3>
            <div v-for="(image, counter) in fungi.images" :key="counter">
              <v-list-item>
                <v-text-field
                  v-model="image.image"
                  append-icon="mdi-image"
                  label="Image Link"
                  outlined
                  clearable
                />
                <v-btn icon x-large @click="deleteInput('image', counter)">
                  ❌
                </v-btn>
              </v-list-item>
            </div>
            <v-btn
              fab
              dark
              icon
              large
              @click="addInput('image')"
              class="mb-auto"
            >
              <h1>➕</h1>
            </v-btn>
          </v-col>
          <v-col class="form-container" align="center">
            <h3 class="pb-2">Variants</h3>
            <div v-for="(variant, counter) in fungi.variants" :key="counter">
              <v-list-item>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="variant.referenceName"
                      append-icon="mdi-mushroom"
                      label="Reference Name"
                      outlined
                      clearable
                      required
                    />
                    <v-text-field
                      v-model="variant.image"
                      append-icon="mdi-image-multiple"
                      label="Image Link"
                      outlined
                      clearable
                      required
                    />
                  </v-col>
                  <v-col>
                    <v-textarea
                      v-model="variant.description"
                      label="Description"
                      outlined
                      clearable
                    />
                  </v-col>
                </v-row>
                <v-btn icon x-large @click="deleteInput('variant', counter)">
                  ❌
                </v-btn>
              </v-list-item>
            </div>
            <v-btn
              fab
              dark
              icon
              large
              @click="addInput('variant')"
              class="mb-auto"
            >
              <h1>➕</h1>
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col align="center">
            <v-btn fab dark large icon @click="submitForm()">
              <h1>💾</h1>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script lang="ts">
// Vue
import { Vue, Component } from "vue-property-decorator";

// Types
import { Fungi, MycologicalCharacteristic } from "../../../interfaces/index";
import * as selectsContent from "../../../interfaces/constants";

// Components
import FungiMycologicalCharacteristic from "./FungiMycologicalCharacteristic.vue";
import FungiVariant from "./FungiVariant.vue";

// Apis
import FungiApi from "../../../apis/fungi-api";

@Component({
  name: "FungiForm",
  components: {
    FungiMycologicalCharacteristic,
    FungiVariant,
  },
})
class FungiForm extends Vue {
  fungiApi = new FungiApi();

  emptyMycologicalCharacteristic: MycologicalCharacteristic = {
    images: [""],
    description: "",
  };

  fungi: Fungi = {
    binomialName: "",
    description: "",
    habitat: "",
    scientificClassification: {
      kingdom: "Fungi",
      division: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Agaricales",
      family: "",
      genus: "",
      species: "",
    },
    mycologicalCharacteristics: {
      gills: this.emptyMycologicalCharacteristic,
      cap: this.emptyMycologicalCharacteristic,
      hymenium: this.emptyMycologicalCharacteristic,
      stipe: this.emptyMycologicalCharacteristic,
      spore: this.emptyMycologicalCharacteristic,
      ecology: this.emptyMycologicalCharacteristic,
      edibility: this.emptyMycologicalCharacteristic,
    },
    variants: [],
    images: [],
  };

  selects = selectsContent;

  addInput(input: string) {
    switch (input) {
      case "variant":
        this.fungi.variants.push({
          referenceName: "",
          image: "",
          description: "",
        });
        break;
      case "image":
        this.fungi.images.push({ image: "" });
        break;
      default:
        break;
    }
  }

  deleteInput(input: string, counter: number) {
    switch (input) {
      case "variant":
        this.fungi.variants.splice(counter, 1);
        break;
      case "image":
        this.fungi.images.splice(counter, 1);
        break;
      default:
        break;
    }
  }

  async submitForm() {
    console.log("Fungi", this.fungi);
    let response;
    try {
      response = await this.fungiApi.addFungi(this.fungi);
    } catch (error) {
      console.log(error);
    }
    return console.log("Response", response);
  }
}
export default FungiForm;
</script>
