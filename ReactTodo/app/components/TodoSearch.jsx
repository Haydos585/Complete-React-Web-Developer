let React = require('react');

let TodoSearch = React.createClass({
  handleSearch: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return(
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} />
        </div>

        <label>
          <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
          Show completed todos
        </label>
      </div>
    );
  }
});

module.exports = TodoSearch;