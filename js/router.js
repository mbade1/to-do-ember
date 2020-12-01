//Tells Ember.js to detect when the app's URL matches '/' and to render the todos template

//This class has a model functino that returns all the existing todos:

Todos.TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("todo");
  },
});

Todos.Router.map(function () {
  this.resource("todos", { path: "/" }, function () {
    this.route("active");
    this.route("completed");
    // additional child routes will go here later
  });
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor("todos");
  },
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function () {
    return this.store.filter("todo", function (todo) {
      return !todo.get("isCompleted");
    });
  },
  renderTemplate: function (controller) {
    this.render("todos/index", { controller: controller });
  },
});
