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

    render() {
        return (
            <div className="ui container">

                <div>{this.renderDaypart(this.props.genInfo.dayPart)}</div>

                <div className="ui equal width center aligned padded grid">
                    <div className="row">
                        <div className="column">
                            <div className="city-name" >
                                <span>{this.props.genInfo.city}</span>
                                <h4>{this.props.genInfo.country}</h4>
                            </div>
                        </div>
                        <div className="column">
                         <div className="city-name city-temp">{this.props.genInfo.temperature}</div>
                        </div>
                    </div>
                </div>
                <div>{this.props.genInfo.time}</div>
                <div className="ui container">
                             <img className="weather-icon" src={`${this.props.day0.conditionImg}`} ></img>
                             {this.props.day0.conditionText}
                            </div>

               
            </div>
        )
    }
}

export default City;


