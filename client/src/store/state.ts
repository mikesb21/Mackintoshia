// @ts-nocheck
import { State } from "@/interfaces";

export default {
  currentFungi: {
    _id: 0,
    binomialName: "",
    description: "",
    habitat: "",
    images: [],
    mycologicalCharacteristics: [
      {
        image: "",
        description: "",
      },
    ],
    scientificClassification: {
      kingdom: "",
      division: "",
      class: "",
      order: "",
      family: "",
      genus: "",
      species: "",
    },
    variants: [
      {
        image: "",
        description: "",
        referenceName: "",
      },
    ],
  },
  fungiList: [],
  loading: false,
} as State;
