define('models/data', [

], function (

) {

    'use strict';

    var DataModel = function() {

        var data = [
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
                return data;
            },
            getOne: function(index) {
                return data[index];
            }
        };
    };

    return DataModel;
});
