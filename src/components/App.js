import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';
import apixuConfig from '../api/apixu';
import City from './City';

class App extends React.Component {
    state = { generalInfo: {} , day0:{}, day1:{}, day2: {} }

    

    onSearchSubmit = async (term) => {
        const response = await axios(`${apixuConfig.baseURL}${apixuConfig.headers.Authorization}&q=${term}&days=3`);
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
            }
            
         });
   
    }

    


    render(){
            
        return (
            <div>
                <SearchBar naSubmitanje={this.onSearchSubmit} callCity={this.callCity}/>
                <City genInfo={this.state.generalInfo} day0={this.state.day0} />
                
            </div>
        )
    }
}

export default App;