import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';
import ForecastList from './ForecastList'
import apixuConfig from '../api/apixu';
import City from './City';

class App extends React.Component {
    state = { generalInfo: {} , day0:{}, day1:{}, day2: {}, day3: {}, day4: {} }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.onSearchSubmit(`${position.coords.latitude.toFixed(5)} ${position.coords.longitude.toFixed(6)}`),
            (err) => this.setState({errorMessage: err.message})
            );
    }

    onSearchSubmit = async (term) => {
        const response = await axios(`${apixuConfig.baseURL}${apixuConfig.headers.Authorization}&q=${term}&days=5`);
        this.setState({ 
            generalInfo: {
                city: response.data.location.name,
                country: response.data.location.country,
                time: response.data.location.localtime,
                dayPart: response.data.current.is_day,
                temperature: response.data.current.temp_c,
                 },
            day0: {
                date: response.data.forecast.forecastday[0].date,
                maxtTemp: response.data.forecast.forecastday[0].day.maxtemp_c,
                minTemp: response.data.forecast.forecastday[0].day.mintemp_c,
                conditionText: response.data.forecast.forecastday[0].day.condition.text,
                conditionImg: response.data.forecast.forecastday[0].day.condition.icon // Add .text for 'Sunny' || add .icon for icon of the condition   
            },
            day1: {
                date: response.data.forecast.forecastday[1].date,
                maxtTemp: response.data.forecast.forecastday[1].day.maxtemp_c,
                minTemp: response.data.forecast.forecastday[1].day.mintemp_c,
                conditionText: response.data.forecast.forecastday[1].day.condition.text,
                conditionImg: response.data.forecast.forecastday[1].day.condition.icon // Add .text for 'Sunny' || add .icon for icon of the condition
            },
            day2: {
                date: response.data.forecast.forecastday[2].date,
                maxtTemp: response.data.forecast.forecastday[2].day.maxtemp_c,
                minTemp: response.data.forecast.forecastday[2].day.mintemp_c,
                conditionText: response.data.forecast.forecastday[2].day.condition.text,
                conditionImg: response.data.forecast.forecastday[2].day.condition.icon
            },
            day3: {
                date: response.data.forecast.forecastday[3].date,
                maxtTemp: response.data.forecast.forecastday[3].day.maxtemp_c,
                minTemp: response.data.forecast.forecastday[3].day.mintemp_c,
                conditionText: response.data.forecast.forecastday[3].day.condition.text,
                conditionImg: response.data.forecast.forecastday[3].day.condition.icon
            },
            day4: {
                date: response.data.forecast.forecastday[4].date,
                maxtTemp: response.data.forecast.forecastday[4].day.maxtemp_c,
                minTemp: response.data.forecast.forecastday[4].day.mintemp_c,
                conditionText: response.data.forecast.forecastday[4].day.condition.text,
                conditionImg: response.data.forecast.forecastday[4].day.condition.icon
            }
            
         });
   
    }

    


    render(){
            
        return (
            <div>
                <SearchBar naSubmitanje={this.onSearchSubmit} callCity={this.callCity}/>
                <City genInfo={this.state.generalInfo} day0={this.state.day0} />
                <div className="five wide column">
                    <ForecastList {...this.state}/>
                </div>
            </div>
        )
    }
}

export default App;