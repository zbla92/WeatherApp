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

    renderTime(time){
        const date = new Date(time);
        return `Time:  ${date.getHours()}:${date.getMinutes()}`;
    }

    renderImg(image){
        if(image ===  undefined){
            
        } else return <img className="weather-icon" src={`${image}`} ></img>
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
                         <div className="city-name city-temp">{parseInt(this.props.genInfo.temperature)}&#176;</div>
                        </div>
                    </div>
                </div>
                <div className="time">{this.renderTime(this.props.genInfo.time)}</div>
                <div className="ui container">
                             {this.renderImg((this.props.day0.conditionImg))}
                             {this.props.day0.conditionText}
                            </div>

               
            </div>
        )
    }
}

export default City;


