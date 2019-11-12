import React from 'react';

const FriendsCard = props => {
    return (
        <div>
            <h1>{props.item.name}</h1>
            <h5>Aged: {props.item.age}</h5>
            <p>Email: {props.item.email}</p>
        </div>
    )
}

export default FriendsCard;