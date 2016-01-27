define('components/metrics-dashboard/templates/element', [
    'react',
    'reactDom'
], function (
    React,
    ReactDOM
) {

    'use strict';

    var ElementTemplate = function() {

        var MetricsElement = React.createClass({
            displayName: 'MetricsElement',
            updateState: function updateState() {
                this.setState({
                    headerTxt: 'something'
                });
            },
            removeElement: function removeElement() {
                this.props.removeElement(this);
            },
            render: function render() {
                return React.createElement(
                    'div',
                    { className: 'component__element' },
                    React.createElement('input', {className: 'component-element__header', value: this.props.data.headerTxt, disabled: true}),
                    React.createElement('input', {className: 'component-element__limit', value: this.props.data.limitTxt, disabled: true}),
                    React.createElement('input', {className: 'component-element__updates', value: this.props.data.updatesTxt, disabled: true}),
                    React.createElement('input', {className: 'component-element__periode', value: this.props.data.periodeTxt, disabled: true}),
                    React.createElement('button', {className: 'component-element__icon-remove', onClick: this.removeElement},
                        React.createElement('span', {className: 'glyphicon glyphicon-remove-circle'})
                    )
                )
            }
        });

        return {
            render: function() {
                return React.createFactory(MetricsElement);
            }
        };
    };

    return ElementTemplate;
});
