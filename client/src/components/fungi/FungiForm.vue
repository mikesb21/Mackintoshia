<template>
  <v-container>
    <v-form ref="form">
      <v-container>
        <v-row no-gutters>
          <v-col class="form-container" align="center">
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
                append-icon="mdi-script-text"
                v-model="fungi.description"
                label="Description"
                outlined
                clearable
              />
              <v-textarea
                append-icon="mdi-pine-tree"
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
                append-icon="mdi-gamepad-circle-up"
                v-model="fungi.scientificClassification.kingdom"
                label="Kingdom"
                value="Fungi"
                outlined
              />
              <v-text-field
                append-icon="mdi-gamepad-circle-right"
                v-model="fungi.scientificClassification.division"
                label="Division"
                value="Basidiomycota"
                outlined
              />
              <v-text-field
                append-icon="mdi-gamepad-circle-down"
                v-model="fungi.scientificClassification.class"
                label="Class"
                value="Agaricomycetes"
                outlined
              />
              <v-text-field
                append-icon="mdi-gamepad-circle-left"
                v-model="fungi.scientificClassification.order"
                label="Order"
                value="Agaricales"
                outlined
              />
              <v-text-field
                append-icon="mdi-gamepad-circle-outline"
                v-model="fungi.scientificClassification.family"
                label="Family"
                outlined
              />
              <v-text-field
                append-icon="mdi-gamepad-circle"
                v-model="fungi.scientificClassification.genus"
                label="Genus"
                outlined
                clearable
              />
              <v-text-field
                append-icon="mdi-mushroom"
                v-model="fungi.scientificClassification.species"
                label="Species"
                outlined
                clearable
              />
            </v-container>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="form-container" align="center">
            <h3 class="pb-2">Mycological Characteristics</h3>
            <div v-for="mcInput in mcInputs" :key="mcInput.id">
              <v-container class="form-unit-container">
                <v-text-field
                  append-icon="mdi-image"
                  :label="mcInput.labelImageLink"
                  outlined
                  clearable
                />
                <v-textarea
                  append-icon="mdi-script-text"
                  :label="mcInput.labelDescription"
                  outlined
                  clearable
                />
              </v-container>
            </div>
            <v-btn fab dark icon large @click="addInput('mc')" class="mb-auto">
              <h1>➕</h1>
            </v-btn>
          </v-col>
          <v-col class="form-container" align="center">
            <h3 class="pb-2">Variants</h3>
            <div v-for="variant in variantInputs" :key="variant.id">
              <v-container class="form-unit-container">
                <v-text-field
                  append-icon="mdi-mushroom"
                  :label="variant.labelRefName"
                  outlined
                  clearable
                  required
                />
                <v-text-field
                  append-icon="mdi-image-multiple"
                  :label="variant.labelImageLink"
                  outlined
                  clearable
                  required
                />
                <v-textarea
                  append-icon="mdi-script-text"
                  :label="variant.labelDescription"
                  outlined
                  clearable
                />
              </v-container>
            </div>
            <v-spacer />
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

// Utils
import { v4 as uuidv4 } from "uuid";

// Types
import { Fungi } from "../../interfaces/index";

// Components
import FungiMycologicalCharacteristic from "./FungiMycologicalCharacteristic.vue";
import FungiVariant from "./FungiVariant.vue";

@Component({
  name: "Form",
  components: {
    FungiMycologicalCharacteristic,
    FungiVariant,
  },
})
class Form extends Vue {
  fungi: Fungi = {
    binomialName: "",
    description: "",
    habitat: "",
    scientificClassification: {
      kingdom: "Fungi",
      division: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Agaricales",
      family: "Amanitaceae",
      genus: "",
      species: "",
    },
    mycologicalCharacteristics: [],
    variants: [],
    images: [],
  };

  mcInputs = [
    {
      id: uuidv4(),
      labelDescription: "Description",
      labelImageLink: "Image Link",
    },
  ];

  variantInputs = [
    {
      id: uuidv4(),
      labelRefName: "Reference Name",
      labelImageLink: "Image Link",
      labelDescription: "Description",
    },
  ];

  addInput(input: string) {
    switch (input) {
      case "mc":
        this.mcInputs.push({
          id: uuidv4(),
          labelDescription: "Description",
          labelImageLink: "Image Link",
        });
        break;
      case "variant":
        this.variantInputs.push({
          id: uuidv4(),
          labelRefName: "Reference Name",
          labelImageLink: "Image Link",
          labelDescription: "Description",
        });
        break;
      default:
        break;
    }
  }

  submitForm() {
    console.log("Fungi", this.fungi);
  }
}
export default Form;
</script>
