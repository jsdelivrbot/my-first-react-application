define('components/metrics-dashboard/main', [
    'components/metrics-dashboard/views/metrics',
    'react',
    'reactDom'
], function (
    MetricsView,
    React,
    ReactDOM
) {

    'use strict';

    var MetricsMain = function(injector, mediators) {
        var metricsView;

        return {
            create: function(data, wrapperId) {
                metricsView = new MetricsView(data);
                var element = metricsView.init();
                ReactDOM.render(React.createElement(element), document.getElementById(wrapperId));
            }
        }
    }

    return MetricsMain;
});
