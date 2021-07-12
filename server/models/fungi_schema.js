const { Schema, model } = require('mongoose');

const scientificClassificationSchema = new Schema({
  kingdom: {
    type: String,
    required: [true, 'Kingdom is required']
  },
  division: {
    type: String,
    required: [true, 'Division is required']
  },
  class: {
    type: String,
    required: [true, 'Class is required']
  },
  order: {
    type: String,
    required: [true, 'Order is required']
  },
  family: {
    type: String,
    required: [true, 'Family is required']
  },
  genus: {
    type: String,
    required: [true, 'Genus is required']
  },
  species: {
    type: String,
    required: [true, 'Species is required']
  }
})

const mycologicalCharacteristicsSchema = new Schema({
  gills: {
    images: {
      type: [String],
      required: [true, 'Images are required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    }
  },
  cap: {
    images: {
      type: [String],
      required: [true, 'Images are required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    }
  },
  hymenium: {
    images: {
      type: [String],
      required: [true, 'Images are required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    }
  },
  stipe: {
    images: {
      type: [String],
      required: [true, 'Images are required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    }
  },
  spore: {
    images: {
      type: [String],
      required: [true, 'Images are required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    }
  },
  ecology: {
    images: {
      type: [String],
      required: [true, 'Images are required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    }
  },
  edibility: {
    images: {
      type: [String],
      required: [true, 'Images are required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    }
  }
});

const variantSchema = new Schema({
  image: {
    type: String
  },
  referenceName: {
    type: String,
  },
  description: {
    type: String,
  }
})

const fungiSchema = new Schema(
  {
    binomialName: {
      type: String,
      required: [true, 'name field is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    habitat: {
      type: String,
      required: [true, 'Habitat is required']
    },
    scientificClassification: scientificClassificationSchema,
    mycologicalCharacteristics: mycologicalCharacteristicsSchema,
    variants: [variantSchema],
    images: [
      {
        image: {
          type: String,
          required: [true, 'Images are required']
        }
    }
  ]
  },
  { timestamps: true },
);

module.exports = model('fungi', fungiSchema);
