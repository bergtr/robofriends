import React, { Fragment } from 'react';

const Card = ({ id, name, email }) => {
    return (
        <Fragment>
            <header className=' tc bg-light-blue dib br3 b--lightest-blue ma2 pa3 shadow-3 grow'>
                <img src={`https://robohash.org/${id}?size=200x200`} alt="robopicture" />
                <main>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </main>
            </header>
        </Fragment>
    )
}

export default Card;