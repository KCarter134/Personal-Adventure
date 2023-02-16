import React from 'react'
import homePic from '../assets/pictures/homePic.jpg'

export default function Home() {
    return(
        <section className='pic-container'>
            <img src={homePic} alt="" className='homepic' />
            <div className='info-module'>
                <div className='info-flex-container'>
                    <div className='travel-random-info-display inf-dis'>Random Travel Location</div>
                    <div className='concert-random-info-display inf-dis'>Random Concert/Show</div>
                </div>
            </div>
            <div className='front-info'></div>
        </section>
    );
}