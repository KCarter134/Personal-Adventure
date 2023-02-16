import React from 'react';
import cityPic from '../assets/pictures/city.jpg'
import HomepageForm from './homepageForm'

export default function Homepage() {


    const searchByCityCoords = (city) => {
        let APIKey = '22c381336de0f996a4083c7ecafd3174';
        let queryCity = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + APIKey;
         //Query city for coordinates from OpenWeatherMap
        fetch(queryCity)
        .then(result => { 
            console.log(result.status)
            return result.json();
        })
        .then(data => {
                let something = 'https://api.seatgeek.com/2/events?' + 'lon=' + data[0].lon+ '&' + 'lat=' + data[0].lat +  '&taxonomies.name=concert&client_id=MzEzNjU0MzZ8MTY3Mjk2NjkyNi4xMTAzMDM'
                fetch(something)
                .then(result => {
                    console.log(result.status);
                    return result.json();
                })
                .then(data => {
                    console.log(data)
                })
                .catch(error => console.log('search failed')) 
        })
        .catch(error => {
            console.log('search failed')
        })
    }
    searchByCityCoords();
    
    return (
        <section className='homepage'>
            <h1 className="web-title"><b>Adventure Finder</b></h1>
            <img src={cityPic}  alt="" className="city-pic"/>
            <HomepageForm />
        </section>
            
    );
}