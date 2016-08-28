describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should correctly filter favorite foods', function(){
		var pickyEaters = [{
			name: "Molly",
			favoriteFood: "lemonade"
		}, {
			name: "Brad",
			favoriteFood: "cookies"
		}, {
			name: "Krista",
			favoriteFood: "kale"
		}];

		var results = $filter('favoriteFood')(pickyEaters, 'lemonade');

		expect(results.length).toBe(1);
		expect(results[0].name).toBe('Molly');
	})


});
