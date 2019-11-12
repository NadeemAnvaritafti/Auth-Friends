import React from 'react';

const FriendsCard = props => {
    return (
        <div className='card'>
            <h4>{props.item.name}</h4>
            <p>{props.item.age} years old</p>
            <p>{props.item.email}</p>   
        </div>
    )
}

export default FriendsCard;