import React from "react";
import heroimg from '../assets/heroimg.png'

function Hero(){
    return(
        <div>        
            <div className="hero">
                <img src={heroimg}/>
            </div>
            <div className="content">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. airbnb provides you creative places to live and adventurous experiences to enjoy. Here you can live the life as you want and enjoy howmuch ever you want.</p>
            </div>

        </div>

    )
}

export default Hero