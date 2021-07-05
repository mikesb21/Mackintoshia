const { Schema, model } = require('mongoose');

const scientific_classificationSchema = new Schema({
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

const mycological_characteristicSchema = new Schema({
  images: {
    type: [String],
    required: [true, 'Images are required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  }
});

const variantSchema = new Schema({
  image: {
    type: String
  },
  reference_name: {
    type: String,
    required: [true, 'Name is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  }
})

const fungiSchema = new Schema(
  {
    binomial_name: {
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
    scientific_classification: scientific_classificationSchema,
    mycological_characteristics: [mycological_characteristicSchema],
    variants: [variantSchema],
    images: {
      type: [String],
      required: [true, 'Images are required']
    }
  },
  { timestamps: true },
);

module.exports = model('fungi', fungiSchema);