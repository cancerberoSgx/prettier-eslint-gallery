//@module Banana
define('Banana.Collection', ['Banana.Model', 'Backbone'], function(
  Model,
  Backbone,
) {
  'use strict';

  //@class Banana.Collection @extend Backbone.Collection
  return Backbone.Collection.extend({
    //@property {Banana.Model} model
    model: Model,

    //@property {String} url
    url: 'api/banana.php',

    //@method comparator Defines a custom comparative method between Banana to sort the Banana taking into account if there are default shipping or default billing
    //@param {Banana.Model} model
    //@return {Number}
    comparator: function(model) {
      return model.get('notready') || model.get('alreadyeaten') ? 0 : 1;
    },
  });
});
