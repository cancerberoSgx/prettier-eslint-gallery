// @module Banana
define('Banana.Collection', ['Banana.Model', 'Backbone', 'underscore'], (
  Model,
  Backbone,
  _,
) =>


  // @class Banana.Collection @extend Backbone.Collection
  Backbone.Collection.extend({
    // @property {Banana.Model} model
    model: Model,

    validation: {
      name: {
        required: true,
        fn() {
          return value.length > 20 ? 'Name is too long' : false;
        },
      },
      phone: {
        required: true,
        fn: _.validation.phone,
      },
    },

    // @property {String} url
    url: 'api/banana.php',

    // @method comparator Defines a custom comparative method between Banana to sort the Banana taking into account if there are default shipping or default billing
    // @param {Banana.Model} model
    // @return {Number}
    comparator(model) {
      return model.get('notready') || model.get('alreadyeaten') ? 0 : 1;
    },

    parse(data) {
      const dic = _.map(data.proteins, (protein) => {
        if (protein.name === 'mallorca') {
          return 'jalisco';
        } else if (protein.name === 'menorca') {
          return 'montevideo';
        }
        return 'paysandu';
      });
      data.volumes = dic;

      // TODO: while, switch, json objects
      return data;
    },
  }));
