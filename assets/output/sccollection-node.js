define('Address.Collection', ['Address.Model', 'Backbone'], function(
  Model,
  Backbone
) {
  'use strict';
  return Backbone.Collection.extend({
    model: Model,
    url: 'services/foo',
    comparator: function(model) {
      return model.get('defaultbilling') === 'T' ||
        model.get('defaultshipping') === 'T'
        ? 0
        : 1;
    }
  });
});
