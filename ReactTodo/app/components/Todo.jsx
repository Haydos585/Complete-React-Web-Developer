let moment = require('moment');
let React = require('react');

class Todo extends React.Component {
  render() {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? "todo todo-completed" : "todo";

    var renderDate = () => {
      var message = 'Created ';
      var timeStamp = createdAt;

      if(completed) {
        message = "Completed ";
        timeStamp = completedAt;
      }
      return message + moment.unix(timeStamp).format('Do MMM YYYY @ h:mm a');
    }
    return(
      <div className={todoClassName} onClick={() => {
        this.props.onToggle(id)
      }}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
};

module.exports = Todo;