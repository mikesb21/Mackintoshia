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
  images: Array<string>;
  description: string;
};

export type MycologicalCharacteristics = {
  gills: MycologicalCharacteristic;
  cap: MycologicalCharacteristic;
  hymenium: MycologicalCharacteristic;
  stipe: MycologicalCharacteristic;
  spore: MycologicalCharacteristic;
  ecology: MycologicalCharacteristic;
  edibility: MycologicalCharacteristic;
};

export type Variant = {
  image: string;
  referenceName: string;
  description: string;
};

export type Image = { image: string };

export type Fungi = {
  id?: number;
  binomialName: string;
  description: string;
  habitat: string;
  scientificClassification: ScientificClassification;
  mycologicalCharacteristics: MycologicalCharacteristics;
  variants: Array<Variant>;
  images: Array<Image>;
};
