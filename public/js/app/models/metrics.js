define('models/metrics', [

], function (

) {

    'use strict';

    var MetricsModel = function() {
        /*
        var componentElementHeader = React.createElement('p', {className: 'component-element__header'}, 'Metric Name');
        var componentElementLimit = React.createElement('p', {className: 'component-element__limit'}, 'Limit X reached');
        var componentElementUpdates = React.createElement('p', {className: 'component-element__updates'}, '162 updates');
        var componentElementPeriode = React.createElement('p', {className: 'component-element__periode'}, 'Monthly resolution');
        */

        var metrics = [
            {
                id: 0,
                headerTxt: 'Metric name',
                limitTxt: 'Limit X reached',
                updatesTxt: '162 updates',
                periodeTxt: 'Monthly resolution'
            },
            {
                id: 1,
                headerTxt: 'Metric name',
                limitTxt: '',
                updatesTxt: '',
                periodeTxt: 'Monthly resolution'
            },
            {
                id: 2,
                headerTxt: 'Metric name',
                limitTxt: 'Limit X reached',
                updatesTxt: '',
                periodeTxt: 'Monthly resolution'
            },
            {
                id: 3,
                headerTxt: 'Metric name',
                limitTxt: '',
                updatesTxt: '',
                periodeTxt: ''
            }
        ];

        return {
            getAll: function() {
                return metrics;
            },
            getOne: function(index) {
                return metrics[index];
            },
            dispose: function() {
                metrics = undefined;
            }
        };
    };

    return MetricsModel;
});
