const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-dom/test-utils');
const expect = require('expect');
const $ = require('jQuery');
const TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    let todoText = "Test text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({
      todos: []
    });

    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});