define('components/metrics-dashboard/views/metrics', [
    'react',
    'reactDom',
    'components/metrics-dashboard/templates/metrics-dashboard',
    'components/metrics-dashboard/templates/element-list',
    'components/metrics-dashboard/templates/element'
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
