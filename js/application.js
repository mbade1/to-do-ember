//makes new instance of Ember.Application
window.Todos = Ember.Application.create();

//Indicates our app's ApplicationAdapter is an extension of the DS.FixtureAdapter.
//Adapters are resp for comms with a source of data for the app.
//Usually this a Web service API, but for now we use an adapter designed to laod fixture data:

Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: "todos-emberjs",
});
