/*
gui_spec.js

gui_test_runner.html runs the tests within this file.
It also sets the global `TESTAPP` to point to its iframe `contentWindow`
allowing access to that frame's JS scope (TESTAPP.document, for example).

*/

describe("GUI", function() {

	describe("loads", function() {
		it('ok', function(){
			expect(true).toBe(true);
		});
	});

});
