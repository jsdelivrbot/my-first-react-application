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

    var MetricsView = function(injector) {

        var elementTemplate = injector.createInstance(ElementTemplate);
        var elementListTemplate = injector.createInstance(ElementListTemplate, elementTemplate.render());
        var metricsDashboardTemplate = injector.createInstance(MetricsDashboardTemplate, elementListTemplate.render());

        return {
            init: function() {
                return metricsDashboardTemplate.render();
            },
            dispose: function() {
                elementTemplate = undefined;
                elementListTemplate = undefined;
                metricsDashboardTemplate = undefined;
            }
        }
    }

    return MetricsView;
});
