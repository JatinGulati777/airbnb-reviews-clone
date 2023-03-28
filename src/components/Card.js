import React from "react";
import star from '../assets/star.png'
import '../styles/style.css'

function Card(props){

    let badgeText="";
    if(props.openSpots===0){
        badgeText = "SOLD OUT"
    }
    else if(props.location=="Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card-div">
            
            <div>
              {badgeText!="" &&  <div className="img-tag">{badgeText}</div>}
                <img className="review-img" src={props.coverImg}/>
            </div>
            <div>
                <p> <img src={star}/>{props.rating} ({props.reviewCount}) {props.location}</p>
                <h5 className="card-content">{props.title}</h5>
                <p className="card-content"><b style={{display:"inline"}}>{props.price}</b>/person</p>
            </div>
        </div>
    )
}

export default Card