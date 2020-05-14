import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 mw5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robopicture" />
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Card;