var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    
    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input ref="location" type="search" placeholder="Search weather by city name" />
        <button className="button expanded hollow">Get weather</button>
      </form>
    )
  }
});

module.exports = WeatherForm;