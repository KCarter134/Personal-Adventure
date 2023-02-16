import React, { useEffect, useState } from 'react';
import mountainPic from '../assets/pictures/mountain.jpg'
import parkPic from "../assets/pictures/park.jpg"
import campPic from "../assets/pictures/camping.jpg"
import parkEvents from "../assets/pictures/parkEvents.jpg"
import placesPic from "../assets/pictures/placesPic.jpg"
import activitiesPic from "../assets/pictures/activitiesPic.jpg"
import parkTourPic from "../assets/pictures/parkTourPic.jpg"


export default function Travel() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://developer.nps.gov/api/v1/parks?limit=50&start=0&api_key=8w91BhYJTMpXTIMCgectXocGhMCToXrslPKdoQwd')
            .then((response) => response.json())
            .then((data) => setData(data))
                // let apiData = response.data
                // let fullNameArr = apiData.map(name => name.fullName)
                // console.log(fullNameArr)
                // console.log(response.data)
                // return fullNameArr;
        }  
    )


    
    
    return (
        <section className='travel-main'>
            <img src={mountainPic} alt="" className='mountainPic' />
            <div id='travel-option-container'>
                <div className='travel-option monuments'>
                    <img src={parkPic} alt='' className='travel-pic' />
                    <div className='travel-picture-text parks-text'>Parks</div>
                </div>
                <div className='travel-option camping'>
                    <img src={campPic} alt='' className='travel-pic' />
                    <div className='travel-picture-text camping-text'>Camping</div>
                </div>
                <div className='travel-option events'>
                    <img src={parkEvents} alt='' className='travel-pic' />
                    <div className='travel-picture-text events-text'>Events</div>
                </div>
                <div className='travel-option something1'>
                    <img src={placesPic} alt='' className='travel-pic' />
                    <div className='travel-picture-text places-text'>Places</div>
                </div>
                <div className='travel-option something2'>
                    <img src={activitiesPic} alt='' className='travel-pic' />
                    <div className='travel-picture-text activites-text'>Activities</div>
                </div>
                <div className='travel-option something3'>
                    <img src={parkTourPic} alt='' className='travel-pic' />
                    <div className='travel-picture-text tours-text'>Tours</div>
                </div>
            </div>
        </section>
    );
}