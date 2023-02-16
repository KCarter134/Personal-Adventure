import React from 'react';
import cityPic from '../assets/pictures/city.jpg'

export default function Homepage() {
    return (
        <section className='homepage'>
    <h1 class="web-title"><b>Adventure Finder</b></h1>
    <img src={cityPic}  alt="" class="city-pic"/>

    <section id="search-section">
        <div class="input field col s4">
            <input type="text" class="search-bar text" placeholder="city, artist, or venue" id="user-input"/>
          </div>  
            <input type="submit" value="Search" class="search-bar submit" id="submit-button"/>
        
        <article id="card-container">

        </article>
    </section>
    </section>
    );
}