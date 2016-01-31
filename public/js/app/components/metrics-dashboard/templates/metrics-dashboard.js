define('metrics-dashboard/templates/metrics-dashboard', [
    'react',
    'reactDom'
], function (
    React,
    ReactDOM
) {

    'use strict';

    var MetricsDashboardTemplate = function(MetricsElementList, data) {
        var MetricsApp = React.createClass({
            displayName: 'MetricsApp',
            getInitialState: function getInitialState() {
                this.editMode = false;
                return {
                    buttonTxt: '',
                    data: data.metricsData
                }
            },
            handleClick: function handleClick(e){
                if (!this.editMode) {
                    var grid = e.target.parentElement.parentElement.children[1];
                    this.setState({ buttonTxt: 'EXIT EDITION MODE'});
                    e.target.className = 'component__button component__button-exit';
                    grid.className = 'component__grid edit-mode';

                    var ellipsis = e.target.parentElement.children[1];
                    ellipsis.className = 'component__email ellipsis edit-mode';

                    this.editMode = true;
                }
                else {
                    var grid = e.target.parentElement.parentElement.parentElement.children[1];
                    this.setState({ buttonTxt: ''});
                    e.target.parentElement.className = 'component__button component__button-edit';
                    grid.className = 'component__grid';

                    var ellipsis = e.target.parentElement.parentElement.children[1];
                    ellipsis.className = 'component__email ellipsis';

                    this.editMode = false;
                }
            },
            addNew: function addNew() {
                var newId = this.state.data.length;
                var newElement = {
                    id: newId,
                    headerTxt: '',
                    limitTxt: '',
                    updatesTxt: '',
                    periodeTxt: ''
                };
                var elementList = this.state.data;
                elementList.push(newElement);
                this.setState({data: elementList});
            },
            removeElement: function removeElement(id) {
                var elementList = this.state.data;
                var itemToRemove;
                for (var i = 0, j = elementList.length; i < j; i++) {
                    if (elementList[i].id === id) {
                        itemToRemove = i;
                    }
                }
                if (itemToRemove) {
                    console.log(elementList, itemToRemove, id);
                    elementList.splice(itemToRemove, 1);
                    this.setState({data: elementList});
                }
            },
            gridClassName: function gridClassName() {
                return 'component__grid';
            },
            render: function render() {
                return React.createElement(
                    'div',
                    {className: 'component'},
                    React.createElement(
                        'div',
                        {className: 'component__header'},
                        React.createElement(
                            'img',
                            {className: 'component__logo', src: data.logo}
                        ),
                        React.createElement('div', {className: 'component__email ellipsis'}, data.email),
                        React.createElement(
                            'button',
                            {className: 'component__button component__button-edit', onClick: this.handleClick},
                            this.state.buttonTxt,
                            React.createElement(
                                'span',
                                { className: 'glyphicon glyphicon-pencil'}
                            )
                        )
                    ),
                    React.createElement(
                        MetricsElementList,
                        {data: this.state.data, that:this}
                    )
                )
            }
        });

        return {
            render: function() {
                return React.createFactory(MetricsApp);
            }
        };
    }

    return MetricsDashboardTemplate;
});
