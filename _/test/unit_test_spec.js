describe("Unit X", function() {

	describe("stub", function() {
		it('ok', function(){
			expect(true).toBe(true);
		});
	});

});

/*
describe("AJAX Stub", function() {
	var el = document.createElement('div');
	el.setAttribute('id', 'test' + new Date().getTime() );

	var o = unit;

	it('loads', function(){
		runs(function() {
			o.load('/');
		});

		waitsFor(function() {
			return o.columnInfo;
		}, "load from Google Drive", 5000);

		runs(function() {
			expect(o.thing.length).toBeGreaterThan(0);
		});
	});
});
*/
