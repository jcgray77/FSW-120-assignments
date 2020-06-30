import React from 'react';

const card = ({ fullName }) => {

    return (
        <div>
            <li>
                <h1>{fullName}</h1>
            </li>
        </div>
    );
}

export default card;