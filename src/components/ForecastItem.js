import './ForecastItem.css'
import React from 'react';

const ForecastItem = ({date, maxTmp, minTemp, condition, icon}) => {
    const getDate = (date) =>{
        if(date === undefined){
        } else{
            return date.slice(5,10)
        }
    }
return(
     <div className="column">
            <h2 className="ui header">{getDate(date)}</h2>
            <img src={`${icon}`}></img>
            <h3 className="ui info">Max: {maxTmp}&#176; C</h3>
            <h3 className="ui info">Min: {minTemp}&#176; C</h3>
            <h6 className="forecast_condition">{condition}</h6>

            

     </div>
    
    );   
}

export default ForecastItem;

