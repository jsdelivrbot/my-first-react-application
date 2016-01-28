define([
    'chai',
    'sinon',
    'app/app'
], function (
    chai,
    sinon,
    Application
) {

    'use strict';

    var assert = chai.assert;

    describe.only('App > app', function() {

        var app;

        beforeEach(function() {

        });

        afterEach(function() {
            app = undefined;
        });

        it('should pass', function() {
            assert.equal(2,2);
        });

    });

});
