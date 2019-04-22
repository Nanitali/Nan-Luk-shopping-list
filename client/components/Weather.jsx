import React from 'react'
import request from 'superagent'

export default class Weather extends React.Component {
state = {
    weather: {
      apiURL: 'http://api.apixu.com/v1/current.json',
      key: 'e136d99fd75a4bf49b0223551181311 ',
      city: 'Auckland',
      temperature: null,
      condition: ''
    }
  }

  componentDidMount() {
    this.getWeather()
    
  }

    getWeather() {
      const {apiURL, key, city} = this.state.weather
      const url = apiURL + '?key=' + key + '&q=' + city
      request.get(url)
      .then(res => {
      this.setState({
        weather: {
          city: this.state.weather.city,
          temperature: res.body.current.temp_c + ' degrees celcius',
          condition: res.body.current.condition.text
        }
      })
    })
  }



  render() {
  return (
    <React.Fragment>
      <h3>-Nanita Weather report-</h3>
      <h4>Today's weather in { this.state.weather.city} :</h4>
      <p>Temperature: {this.state.weather.temperature}</p>
      <p>Status: {this.state.weather.condition}</p>
    </React.Fragment>
  )}
}
