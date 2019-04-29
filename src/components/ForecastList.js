import React from 'react';
import ForecastItem from './ForecastItem';

const ForecastList = ({day0, day1, day2, day3, day4}) => {
    const renderList = [day0, day1, day2, day3, day4].map((e) => {
        return <ForecastItem 
                    date={e.date} 
                    maxTmp={e.maxtTemp} 
                    minTemp={e.minTemp} 
                    condition={e.conditionText} 
                    icon={e.conditionImg}  
              />
    })
    
    

    return(
    <div className="ui grid container">
        <div className="five column row forecast_list">
              {renderList}
        </div>
    </div>)
}
export default ForecastList;


