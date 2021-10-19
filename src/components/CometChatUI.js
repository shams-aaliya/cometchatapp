import React from 'react';

const CometChatUI = ({userdetail}) => {
    console.log(userdetail);
    return (
        <div>
            <h1>Hi! My name is {userdetail.name} </h1>
        </div>
    )
}

export default CometChatUI
