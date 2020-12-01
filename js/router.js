//Tells Ember.js to detect when the app's URL matches '/' and to render the todos template

Todos.Router.map(function () {
  this.resource("todos", { path: "/" });
});

//This class has a model functino that returns all the existing todos:

Todos.TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("todo");
  },
});
