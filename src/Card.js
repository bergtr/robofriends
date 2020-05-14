import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='dib tc bg-light-blue br3 b--lightest-blue ma2 pa3 shadow-3 grow'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robopicture" />
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Card;