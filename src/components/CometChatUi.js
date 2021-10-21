import React from 'react';
import {CometChatUI,} from '../cometchat-pro-react-ui-kit/CometChatWorkspace/src';
// import { CometChat } from '@cometchat-pro/chat';

const CometChatUi = ({userdetail}) => {
    
    return (
        <div style={{width: '100vw', height:'100vh' }}>
            <CometChatUI {...userdetail}/>
        </div>
    )
}

export default CometChatUi