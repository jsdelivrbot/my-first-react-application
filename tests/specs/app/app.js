define([
    'chai',
    'sinon',
    'soma',
    'infuse',
    'app/app'
], function (
    chai,
    sinon,
    soma,
    infuse
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

        it('should fail', function() {
            assert.equal(1,2);
        });

    });

});
