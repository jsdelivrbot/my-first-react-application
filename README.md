The project has been build using RequireJS and React. As a module it is, you can instantiate it whether you want, and the way to do it is very easy.

##Installation##

The app has been built using grunt. The dependencies can be found at the Gruntfile.json. To install all the dependencies just open the terminal and go to the project folder. Once you are there just use the npm call: 

```npm install ```


##Get it running##

The app runs using a local server. To get it ready you need to type:

```grunt connect:server```



##How to use the component##

**Import** the entry point of the component using *RequireJS*.

####Import####
```
define([
    'metrics-dashboard/main'
], function (
    MetricsDashboardComponent
) {
```

####Instantiate####

After importing the entry point of the component we are able to instantiate it in to our code.

```
var component = new MetricsDashboardComponent();
```

####Build the component####

We build the component by calling the ```create()```method and passing these arguments:

- An object containing these three elements:

	- logo: File to use as a logo of the dashboard.
	- email: Email that will be shown on the dashboard.
	- metricsData: An array that contains all the metrics data 	that the component will use. The metricsData can be stored in 	a variable, or in a model. It has to follow this scheme:

```
var logo = './images/some-image.jpg';
// We also can assign some base64 encoded image to the variable

var data = [{
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
}];
```

As you can see, there is 5 elements we need to set. The only one that is mandatory is the **id**, also it can't be two elements with the same id. All the other elements can be blank.

Finally, the id where we want to load the component.

```
component.create({
	logo: logo,
    email: 'someemailsupersuperlarge@somedomain.com',
    metricsData: data
}, 'component__wrapper');
```