var React = require('react');
var ErrorModal = require('ErrorModal');
var OpenWeatherMap = require('OpenWeatherMap');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  componentDidMount: function() {
    const location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = "#/";
    }
  },

  componentWillReceiveProps: function(newProps) {
    const location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = "#/";
    }
  },

  handleSearch: function(location) {
    var that = this; // change

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    OpenWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message,
      });
    });
  },
  render: function() {
    var {isLoading, location, temp, errorMessage} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-centered">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (   
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;