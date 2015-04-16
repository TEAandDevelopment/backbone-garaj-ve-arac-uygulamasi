var arabaModel = Backbone.Model.extend({
		default: {
			km: 0,
			marka: null,
			renk: "beyaz",
			vitesTuru: null, //otomatik or manuel
			tipi: "şahsi", //şahsi or ticari
			garajdaMi: true
		}
	}),
	arabaCollection = Backbone.Collection.extend({
		model: arabaModel,
		url: "/collection/change"
	}),
	yolView = Backbone.View.extend({
		tagName: "div",
		events: {
			// some..
		},
		initialize: function () {
			// some..
		},
		template: _.template("<%= %>");
		render: function () {
			this.$el.append(this.template(this.model.attributes));
			return this;
		}
	});

var router = Backbone.Router.extend({
		routes: {
			"/": "sokak",
			"/garaj": "garaj"
		},
		sokak: function () {
			
		},
		garaj: function () {
			
		}
	});