describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all vowels from a string', function(){
		var results = $filter('removeAllVowels')('lemonade');
		expect(results).toEqual('lmnd');

		var sentence = $filter('removeAllVowels')('this is a sentence');
		expect(sentence).toEqual('ths s  sntnc');
	})

});
