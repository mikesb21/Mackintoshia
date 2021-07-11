export type ScientificClassification = {
  kingdom: string;
  division: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  species: string;
};

export type MycologicalCharacteristic = {
  image: string;
  description: string;
};

export type Variant = {
  image: string;
  referenceName: string;
  description: string;
};

export type Fungi = {
  id?: number;
  binomialName: string;
  description: string;
  habitat: string;
  scientificClassification: ScientificClassification;
  mycologicalCharacteristics: Array<MycologicalCharacteristic>;
  variants: Array<Variant>;
  images: Array<string>;
};
