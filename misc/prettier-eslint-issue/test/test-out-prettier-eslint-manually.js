//@module Banana
define(
  "Banana.Collection",
  ["Banana.Model", "Backbone", "underscore"],
  (Model, Backbone, _) => {
    "use strict";

    //@class Banana.Collection @extend Backbone.Collection
    return Backbone.Collection.extend({
      //@property {Banana.Model} model
      model: Model,

      validation: {
        name: {
          required: true,
          fn: function() {
            return value.length > 20 ? "Name is too long" : false;
          }
        },
        phone: {
          required: true,
          fn: _.validation.phone
        }
      },

      //@property {String} url
      url: "api/banana.php",

      //@method comparator Defines a custom comparative method between Banana to sort the Banana taking into account if there are default shipping or default billing
      //@param {Banana.Model} model
      //@return {Number}
      comparator: function(model) {
        return model.get("notready") || model.get("alreadyeaten") ? 0 : 1;
      }
    });
  }
);
