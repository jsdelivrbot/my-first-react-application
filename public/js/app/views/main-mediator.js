define('views/main-mediator', [
    'components/metrics-dashboard/main'
], function (
    MetricsDashboardComponent
) {

    'use strict';

    var MainMediator = function (injector, target, dispatcher, metricsModel) {

        dispatcher.addEventListener('start', function(event) {
            var metricsDashboard = injector.createInstance(MetricsDashboardComponent);

            metricsDashboard.create({
                logo: '',
                email: 'someemailsupersuperlarge@somedomain.com',
                metricsData: metricsModel.getAll()
            }, 'example');
        });

        return {
            start: function () {

            },
            dispose: function () {

            }
        };

    };

    return MainMediator;
});
