define([
    'chai',
    'sinon',
    'soma',
    'app/components/metrics-dashboard/main',
    'react',
    'reactDOM'
], function (
    chai,
    sinon,
    soma,
    MetricsDashboardMain,
    react,
    reactDOM
) {

    'use strict';

    var assert = chai.assert;

    describe('Components > Metrics dashboard > Main', function() {

        var sut;

        beforeEach(function() {
            // sut = new MetricsDashboardMain();
        });

        afterEach(function() {

        });

        it('should return true', function() {
            assert.equal(1, 1);
        });

    });

});
