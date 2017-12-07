//@module Address
define("Address.Collection", ["Address.Model", "Backbone"], (Model, Backbone) => {

//@class Address.Collection @extend Backbone.Collection
return Backbone.Collection.extend({
//@property {Address.Model} model
model: Model, url: "services/Address.Service.ss", comparator(model) {return model.get("defaultbilling") === "T" || model.get("defaultshipping") === "T" ? 0 : 1;}});
});
