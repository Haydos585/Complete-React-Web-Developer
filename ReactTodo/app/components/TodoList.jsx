let React = require('react');
let Todo = require('Todo');

class TodoList extends React.Component {
  render() {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        )
      }
      return todos.map((todo) => {
        return(
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
        );
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    );
  }
};

module.exports = TodoList;