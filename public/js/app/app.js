define('app', [
    'models/metrics',
    'views/main-mediator',
    'views/main-view'
], function (
    MetricsModel,
    MainMediator,
    MainView
) {

    'use strict';

    var Application = soma.Application.extend({
        init: function() {
            try {
                this.injector.mapClass('metricsModel', MetricsModel, true);
                var mainMediator = this.mediators.create(MainMediator, new MainView());

            } catch(err) {
                console.log('err', err);
            }

        },
        start: function () {
            this.dispatcher.dispatch('start');
        },
        dispose: function () {
            soma.Application.prototype.dispose.call(this);
        }
    });

    return Application;
});
