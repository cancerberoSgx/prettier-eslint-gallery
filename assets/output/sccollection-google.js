//@module Address
define('Address.Collection', ['Address.Model', 'Backbone'], function(
  Model,
  Backbone
) {
  'use strict';

  //@class Address.Collection @extend Backbone.Collection
  return Backbone.Collection.extend({
    //@property {Address.Model} model
    model: Model,

    //@property {String} url
    url: 'services/foo',

    //@method comparator Defines a custom comparative method between address to sort the address taking into account if there are default shipping or default billing
    //@param {Address.Model} model
    //@return {Number}
    comparator: function(model) {
      return model.get('defaultbilling') === 'T' ||
        model.get('defaultshipping') === 'T'
        ? 0
        : 1;
    },
  });
});
