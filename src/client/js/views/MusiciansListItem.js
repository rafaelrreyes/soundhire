import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MusiciansListItem = (props) => {

    const { 
        name, 
        img_url, 
        genre, 
        instrument,
        rating, 
        description
    } = props;

    const componentStyle = {
        color: "gold"
    };

    const imageUrl = `/src/server/images/${img_url}.jpg`;
    
    const drawStars = () => {
        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(
                <FontAwesomeIcon 
                    key={i} 
                    icon="star"
                    style={componentStyle}
                />
            );
        }
        return stars;
    };

    return (
        <li className="list-group-item">
            <div className="container">
                <div>
                    {/* should eventually use cloud based storage here
                    ie. Amazon S3/AWS */}
                    <img className="" width="200" src={imageUrl}/>
                </div>
                <div>
                    <h3>{name}</h3>
                    <span>{genre} - {instrument}</span>
                    <div>
                        {drawStars()}
                    </div>
                    <p>{description}</p>                  
                </div>
            </div>
        </li>
    )
}

export default MusiciansListItem;