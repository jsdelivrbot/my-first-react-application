define('metrics-dashboard/views/metrics', [
    'react',
    'reactDom',
    'metrics-dashboard/templates/metrics-dashboard',
    'metrics-dashboard/templates/element-list',
    'metrics-dashboard/templates/element'
], function (
    React,
    ReactDOM,
    MetricsDashboardTemplate,
    ElementListTemplate,
    ElementTemplate
) {

    'use strict';

    var MetricsView = function(data) {
        var elementTemplate = new ElementTemplate();
        var elementListTemplate = new ElementListTemplate(elementTemplate.render());
        var metricsDashboardTemplate = new  MetricsDashboardTemplate(elementListTemplate.render(), data);

        return {
            init: function() {
                return metricsDashboardTemplate.render();
            }
        }
    }

    return MetricsView;
});
