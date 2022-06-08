import { useState } from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'


const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        sendMessage(message);
        setMessage("");
    }
    return (
        <div>
            <Form.Control type="text" placeholder='type here...' onChange={e => setMessage(e.target.value)} value={message}>
            </Form.Control>
            <Button onClick={() => handleSubmit()} disabled={!message} varient="primary" type="submit">
                Send
            </Button>
        </div>
    )
}

export default SendMessageForm