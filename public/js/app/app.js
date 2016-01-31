define('app/app', [
    'models/data',
    'metrics-dashboard/main'
], function (
    DataModel,
    MetricsDashboardComponent
) {

    'use strict';

    var Application = function() {

        var dataModel = new DataModel();
        var component = new MetricsDashboardComponent();

        component.create({
            logo: dataModel.getLogo(),
            email: 'someemailsupersuperlarge@somedomain.com',
            metricsData: dataModel.getAll()
        }, 'component__wrapper');
    }

    return Application;

});
