import './City.css'
import React from 'react';

class City extends React.Component{

    renderDaypart(dayPart) {
        if (dayPart === 1) {
            document.body.classList.remove('background-night')
            document.body.classList.add('background-day')
        } else if (dayPart === 0) {
            document.body.classList.remove('background-day')
            document.body.classList.add('background-night')
        }
    }

render(){
        return(
        <div>

                <div>{this.renderDaypart(this.props.genInfo.dayPart)}</div>
                <div>{this.props.genInfo.city}</div>  
                <div>{this.props.genInfo.country}</div>  
                <div>{this.props.genInfo.time}</div>
                
                <div>{this.props.genInfo.temperature}</div>
        </div>
        )
    }
}

export default City;