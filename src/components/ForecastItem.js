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
            <h3 class="ui info">{getDate(date)}</h3>
            <h3 class="ui header">Max: {maxTmp}</h3>

     </div>
    
    );   
}

export default ForecastItem;

