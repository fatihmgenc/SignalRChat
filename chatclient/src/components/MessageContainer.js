const MessageContainer = ({ messages }) => {
    return (
        <div>
            {messages.map(m => (
                <div key={m.id} className="user-message">
                    <div className="message bg-primary">{m.message}</div>
                    <div className="from-user">{m.user}</div>
                </div>
            ))}
        </div>
    )
}

export default MessageContainer