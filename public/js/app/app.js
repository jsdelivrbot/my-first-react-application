define('app', [
    'components/metrics-dashboard/main',
    'models/data'
], function (
    MetricsDashboardComponent,
    DataModel
) {

    'use strict';

    var Application = function() {
        var dataModel = new DataModel();

        var component = new MetricsDashboardComponent()

        component.create({
            logo: './images/logo.svg',
            email: 'someemailsupersuperlarge@somedomain.com',
            metricsData: dataModel.getAll()
        }, 'example'); // component__wrapper
    }

    return Application;

});
