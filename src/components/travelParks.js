import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import parkPic from "../assets/pictures/park.jpg"

function TravelParks() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setItems] = useState([]);

    useEffect(() => {
        fetch("https:developer.nps.gov/api/v1/parks?limit=50&start=0&api_key=8w91BhYJTMpXTIMCgectXocGhMCToXrslPKdoQwd")
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result.data);
                // console.log(result.data)
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
            <img src={parkPic} className='park-pic'></img>
            <div className='page-nav-wrap'>
                <div className='page-nav'>
                    <Link to="./travelParks" className='nav'>Parks</Link>
                    <Link to="./travelCamp" className='nav'>Camping</Link>
                    <Link to="./" className='nav'>Events</Link>
                    <Link to="./" className='nav'>Places</Link>
                    <Link to="./" className='nav'>Activities</Link>
                    <Link to="./" className='nav'>Tours</Link>
                </div>
            </div>

            <div className='mapped-info-inner'>
            {data.map(item => (
                <li key={item.id} >
                <img className='container-pic' src={item.images[0].url}></img>
                        <div className='park-name'>{item.fullName}</div>
                        <div className='address-city'>{item.addresses[0].city}
                            <span className='address-state'>, {item.addresses[0].stateCode}</span>
                            <span className='address-postal'>, {item.addresses[0].postalCode}</span>
                        </div>
                        <div className="physical-address">{item.addresses[0].line1}</div>
                        <a href={item.url} className='park-url'>{item.url}</a>
                        <div className='park-desc'>{item.description}</div>
                </li>
        ))}
            </div>
        </section>
    );
  }
}

export default TravelParks;