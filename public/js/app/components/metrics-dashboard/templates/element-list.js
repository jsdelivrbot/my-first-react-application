define('components/metrics-dashboard/templates/element-list', [
    'react',
    'reactDom'
], function (
    React,
    ReactDOM
) {

    'use strict';

    var ElementListTemplate = function(MetricsElement) {

        var MetricsElementList = React.createClass({
            displayName: 'MetricsElementList',
            addNew: function addNew() {
                var parent = this.props.that;
                parent.addNew();
            },
            removeElement: function(e) {
                var parent = this.props.that;
                parent.removeElement(e.props.data.id)
            },
            render: function render() {
                var that = this;
                var elementsNodes = this.props.data.map(function(element) {
                    return (
                        React.createElement(
                            MetricsElement,
                            {
                                key: element.id,
                                removeElement: that.removeElement,
                                data: element
                            }
                        )
                    );
                });
                return (
                    React.createElement(
                        'div',
                        {className: 'component__grid', that: this.props.that},
                        elementsNodes,
                        React.createElement(
                            'div',
                            {className: 'component__element-new', onClick: this.addNew}, 'CREATE NEW METRIC'
                        )
                    )
                )
            }
        });

        return {
            render: function() {
                return React.createFactory(MetricsElementList);
            }
        };
    }

    return ElementListTemplate;
});
