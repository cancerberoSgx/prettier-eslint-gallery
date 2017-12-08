//@module Banana
define('Banana.Collection', ['Banana.Model', 'Backbone', 'underscore'], function(
	Model,
	Backbone,
	_,
) {
	'use strict';
	//@class Banana.Collection @extend Backbone.Collection
	return Backbone.Collection.extend(
		{
			//@property {Banana.Model} model
			model: Model,
			validation: {
				name: {
					required: !0,
					fn: function() {
						return (
							value.length >
								20 &&
							'Name is too long'
						);
					},
				},
				phone: {
					required: !0,
					fn:
						_
							.validation
							.phone,
				},
			},
			url:
				'api/banana.php',
			comparator: function(
				model,
			) {
				return model.get(
					'notready',
				) ||
					model.get(
						'alreadyeaten',
					)
					? 0
					: 1;
			},
			parse: function(
				data,
			) {
				var dic = _.map(
					data.proteins,
					function(
						protein,
					) {
						return 'mallorca' ===
							protein.name
							? 'jalisco'
							: 'menorca' ===
								protein.name
								? 'montevideo'
								: 'paysandu';
					},
				);
				//TODO: while, switch, json objects
				return (
					(data.volumes = dic),
					data
				);
			},
		},
	);
});
