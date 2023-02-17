import React, { useEffect, useState } from 'react';
import campingPic from "../assets/pictures/camping.jpg"

function TravelParks() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setItems] = useState([]);

    useEffect(() => {
        fetch("https://developer.nps.gov/api/v1/campgrounds?limit=75&start=0&api_key=8w91BhYJTMpXTIMCgectXocGhMCToXrslPKdoQwd")
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result.data);
                console.log(result.data)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        }, [])
    
if (error) {
return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
return <div>Loading...</div>;
} else {
    return (
        <section className='mapped-info-cont'>
            <img src={campingPic} className='park-pic'></img>
            <div className='mapped-info-inner'>

            {data.map(item => (
                <li key={item.id}>
                <img className='container-pic' src={item.images[0].url}></img>
                        <div className='camp-name'>{item.name}</div>
                        <div className='camp-sites'>{item.campsites.totalSites}</div>
                        <a href={item.url} className='park-url'>{item.url}</a>
                        <div className='camp-desc'>{item.description}</div>
                </li>
        ))}
            </div>
        </section>
    );
  }
}

export default TravelParks;