define('metrics-dashboard/main', [
    'metrics-dashboard/views/metrics',
    'react',
    'reactDom'
], function (
    MetricsView,
    React,
    ReactDOM
) {

    'use strict';

    var MetricsMain = function() {
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
