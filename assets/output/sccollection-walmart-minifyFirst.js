//@module Address
define("Address.Collection", ["Address.Model", "Backbone"], function(
  Model,
  Backbone
) {
  "use strict";
  //@class Address.Collection @extend Backbone.Collection
  return Backbone.Collection.extend({
    //@property {Address.Model} model
    model: Model,
    url: "services/Address.Service.ss",
    comparator: function(model) {
      return "T" === model.get("defaultbilling") ||
        "T" === model.get("defaultshipping")
        ? 0
        : 1;
    }
  });
});
