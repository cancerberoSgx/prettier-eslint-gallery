// @module Banana
define('Banana.Collection', ['Banana.Model', 'Backbone', 'underscore'], (Model, Backbone, _) =>


  // @class Banana.Collection @extend Backbone.Collection
  Backbone.Collection.extend({
    // @property {Banana.Model} model
    model: Model,
    validation: { name: { required: !0, fn() {return value.length > 20 && 'Name is too long';} }, phone: { required: !0, fn: _.validation.phone } },
    url: 'api/banana.php',
    comparator(model) {return model.get('notready') || model.get('alreadyeaten') ? 0 : 1;},
    parse(data) {
      const dic = _.map(data.proteins, (protein) => (protein.name === 'mallorca' ? 'jalisco' : protein.name === 'menorca' ? 'montevideo' : 'paysandu'));
      // TODO: while, switch, json objects
      return data.volumes = dic, data;
    },
  }));
