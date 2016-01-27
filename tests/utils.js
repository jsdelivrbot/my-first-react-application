define('utils', [

], function () {

    var utils = {
        clone: function(obj) {
            if (obj == null || typeof(obj) != 'object') {
                return obj;
            }
            var temp = obj.constructor(); // changed
            for(var key in obj) {
                temp[key] = utils.clone(obj[key]);
            }
            return temp;
        }
    };

    return utils;

});
