define('spy-helper', ['sinon', 'ax/device'], function (sinon, device) {

    var stubs = {};
    var api = {};

    var Callbacks = function (callback) {
        var list = [];
        if (callback) {
            callback.push(callback);
        }
        return {
            add: function (cb) {
                list.push(cb);
            },
            remove: function (cb) {
                for (var i = 0, l = list.length; i < l; i++) {
                    if (list[i] === cb) {
                        list.splice(i, 1);
                        break;
                    }
                }
            },
            list: function () {
                return list;
            },
            dispose: function () {
                list.length = 0;
            }
        }
    };

    function handleCallback(id, stub, callbacks) {
        var list = callbacks.list();
        for (var i = 0, l = list.length; i < l; i++) {
            if (typeof list[i] === 'function') {
                list[i](id, stub);
            }
        }
    }

    api = {
        MEDIA_LOAD: 'media-load',
        MEDIA_PLAY: 'media-play',
        MEDIA_PAUSE: 'media-pause',
        MEDIA_STOP: 'media-stop',
        MEDIA_POP: 'media-pop',
        MEDIA_PUSH: 'media-push',
        MEDIA_PRELOAD: 'media-preload',
        create: function (id, obj, method, callback) {
            if (!stubs[id]) {
                var callbacks = new Callbacks(callback)
                var stub = sinon.stub(obj, method, function () {
                    handleCallback(id, stub, callbacks);
                });
                stubs[id] = {
                    stub: stub,
                    callbacks: callbacks
                };
            }
        },
        add: function (id, stub, callback) {
            if (!stubs[id]) {
                stubs[id] = {
                    stub: stub,
                    callbacks: undefined
                };
            }
        },

        addCallback: function (id, callback) {
            if (stubs[id]) {
                stubs[id].callbacks.add(callback);
            }
        },

        removeCallback: function (id, callback) {
            if (stubs[id]) {
                stubs[id].callbacks.remove(callback);
            }
        },

        remove: function (id) {
            if (!stubs[id]) {
                this.restore(id);
                stubs[id].stub = undefined;
                stubs[id].callbacks.dispose();
                stubs[id].callbacks = undefined;
                stubs[id] = undefined;
                delete stubs[id];
            }
        },

        reset: function (id) {
            if (id === undefined) {
                // reset all
                for (var s in stubs) {
                    stubs[s].stub.reset();
                    stubs[s].callbacks.dispose();
                }


            }
            else {
                // reset one
                if (stubs[id]) {
                    stubs[id].stub.reset();
                    stubs[id].callbacks.dispose();
                }
            }


        },
        restore: function (id) {
            if (id === undefined) {
                // reset all
                for (var s in stubs) {
                    stubs[s].stub.restore();
                }


            }
            else {
                // reset one
                if (stubs[id]) {
                    stubs[id].stub.restore();
                }
            }
        },
        get: function (id) {
            if (stubs[id]) {
                return stubs[id].stub;
            }
        },

        getWrapper: function (id) {
            if (stubs[id]) {
                return stubs[id];
            }
        }
    };

    try {
        api.create(api.MEDIA_LOAD, device.media, 'load');
        api.create(api.MEDIA_PLAY, device.media, 'play');
        api.create(api.MEDIA_STOP, device.media, 'stop');
        api.create(api.MEDIA_PAUSE, device.media, 'pause');
        api.create(api.MEDIA_POP, device.media, 'pop');
        api.create(api.MEDIA_PUSH, device.media, 'push');
        api.create(api.MEDIA_PRELOAD, device.media, 'preload');
    } catch(err) {
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++', err);
    }

    return api;

});
