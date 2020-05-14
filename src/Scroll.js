import React from 'react';

const Scroll = (props) =>{
    return(
        <div style={{overflowY:'scroll', border:'solid black 2px', height:'700px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;