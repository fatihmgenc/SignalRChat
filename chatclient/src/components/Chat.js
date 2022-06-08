import React from 'react'
import MessageContainer from './MessageContainer'
import SendMessageForm from './SendMessageForm'

const Chat = ({ messages, sendMessage }) => {
    return (
        <div className='chat' >
            <MessageContainer messages={messages} />
            <SendMessageForm sendMessage={sendMessage}   ></SendMessageForm>
        </div>
    )
}

export default Chat