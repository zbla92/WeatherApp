import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';
import apixuConfig from '../api/apixu';

class App extends React.Component {
    state = { generalInfo: {} , forecast:{} }

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
            forecast: {
                day0: {
                    date: response.data.forecast.forecastday[0].date,
                    maxtTemp: response.data.forecast.forecastday[0].maxtemp_c,
                    minTemp: response.data.forecast.forecastday[0].mintemp_c,
                    condition: response.data.forecast.forecastday[0].condition // Add .text for 'Sunny' || add .icon for icon of the condition

                },
                day1: {
                    date: response.data.forecast.forecastday[1].date,
                    maxtTemp: response.data.forecast.forecastday[1].maxtemp_c,
                    minTemp: response.data.forecast.forecastday[1].mintemp_c,
                    condition: response.data.forecast.forecastday[1].condition // Add .text for 'Sunny' || add .icon for icon of the condition

                },
                day2: {
                    date: response.data.forecast.forecastday[2].date,
                    maxtTemp: response.data.forecast.forecastday[2].maxtemp_c,
                    minTemp: response.data.forecast.forecastday[2].mintemp_c,
                    condition: response.data.forecast.forecastday[2].condition // Add .text for 'Sunny' || add .icon for icon of the condition

                }
            }
         });

        console.log(
            this.state.generalInfo.city,
            this.state.generalInfo.country,
            this.state.generalInfo.time,
            this.state.generalInfo.temperature,
            this.state.forecast.day2.date,
            response
            )
    }



    render(){
        return (
            <div>
                <SearchBar naSubmitanje={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App;