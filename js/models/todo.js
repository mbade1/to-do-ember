//Creates a new class, Todo and places it w/in your app's namespace.
//2 attributes: title and isCompleted

Todos.Todo = DS.Model.extend({
  title: DS.attr("string"),
  isCompleted: DS.attr("boolean"),
});

//Fixture Data below. Fixtures are a way to put sample data into an app before connecting the app to long-term persistence.

Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: "Learn Ember.js",
    isCompleted: true,
  },
  {
    id: 2,
    title: "...",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Profit!",
    isCompleted: false,
  },
  {
    id: 4,
    title: "Rudy Theo!",
    isCompleted: false,
  },
];
