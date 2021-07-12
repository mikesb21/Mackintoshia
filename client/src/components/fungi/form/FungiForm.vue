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
          <v-col class="form-container col-3" align="center">
            <h3 class="pb-2">Mycological Characteristics</h3>
            <v-col class="d-flex flex-column" cols="auto">
              <v-select
                :items="gillsList"
                v-model="fungi.mycologicalCharacteristics.gills"
                label="Gills"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="capList"
                v-model="fungi.mycologicalCharacteristics.cap"
                label="Cap"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="hymeniumList"
                v-model="fungi.mycologicalCharacteristics.hymenium"
                label="Hymenium"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="stipeList"
                v-model="fungi.mycologicalCharacteristics.stipe"
                label="Stipe"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="sporeList"
                v-model="fungi.mycologicalCharacteristics.spore"
                label="Spore"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="ecologyList"
                v-model="fungi.mycologicalCharacteristics.ecology"
                label="Ecology"
                item-text="description"
                return-object
                outlined
              />
              <v-select
                :items="edibilityList"
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
            <div v-for="image in fungi.images" :key="image.id">
              <v-list-item>
                <v-text-field
                  v-model="image.image"
                  append-icon="mdi-image"
                  label="Image Link"
                  outlined
                  clearable
                />
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
            <div v-for="variant in fungi.variants" :key="variant.id">
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
                      append-icon="mdi-script-text"
                      label="Description"
                      outlined
                      clearable
                    />
                  </v-col>
                </v-row>
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
import { Fungi } from "../../../interfaces/index";

// Components
import FungiMycologicalCharacteristic from "./FungiMycologicalCharacteristic.vue";
import FungiVariant from "./FungiVariant.vue";

@Component({
  name: "FungiForm",
  components: {
    FungiMycologicalCharacteristic,
    FungiVariant,
  },
})
class FungiForm extends Vue {
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
      gills: {
        images: [""],
        description: "",
      },
      cap: {
        images: [""],
        description: "",
      },
      hymenium: {
        images: [""],
        description: "",
      },
      stipe: {
        images: [""],
        description: "",
      },
      spore: {
        images: [""],
        description: "",
      },
      ecology: {
        images: [""],
        description: "",
      },
      edibility: {
        images: [""],
        description: "",
      },
    },
    variants: [],
    images: [],
  };

  gillsList = [
    {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Gills_icon.png/64px-Gills_icon.png",
      ],
      description: "Gills on hymenium",
    },
  ];

  capList = [
    {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Conical_cap_icon.svg/64px-Conical_cap_icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Umbonate_cap_icon.svg/64px-Umbonate_cap_icon.svg.png",
      ],
      description: "Cap is conical or umbonate",
    },
    { images: [""], description: "Cap is flat or convex" },
    { images: [""], description: "Cap is campanulate or convex" },
  ];

  hymeniumList = [
    {
      images: [""],
      description: "Hymenium is adnate or adnexed",
    },
    {
      images: [""],
      description: "Hymenium is free",
    },
    {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Adnate_gills_icon2.svg/64px-Adnate_gills_icon2.svg.png",
      ],
      description: "Hymenium is adnate",
    },
  ];

  stipeList = [
    {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bare_stipe_icon.svg/64px-Bare_stipe_icon.svg.png",
      ],
      description: "Stipe is bare",
    },
    {
      images: [""],
      description: "Stipe has a ring and volva",
    },
  ];

  sporeList = [
    {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Transparent_spore_print_icon.svg/64px-Transparent_spore_print_icon.svg.png",
      ],
      description: "Spore print is purple-brown",
    },
    {
      images: [""],
      description: "Spore print is black",
    },
    {
      images: [""],
      description: "Spore print is white",
    },
  ];

  ecologyList = [
    {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Saprotrophic_fungus.svg/64px-Saprotrophic_fungus.svg.png",
      ],
      description: "Ecology is saprotrophic",
    },
    {
      images: [""],
      description: "Ecology is mycorrhizal",
    },
  ];

  edibilityList = [
    {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Mycomorphbox_Psychoactive.png/64px-Mycomorphbox_Psychoactive.png",
      ],
      description: "Edibility: psychoactive",
    },
    {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Mycomorphbox_Psychoactive.png/64px-Mycomorphbox_Psychoactive.png",
      ],
      description: "Edibility: poisonous or psychoactive",
    },
  ];

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

  submitForm() {
    console.log("Fungi", this.fungi);
  }
}
export default FungiForm;
</script>
