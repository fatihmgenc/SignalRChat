import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lobby from './components/Lobby';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useState } from 'react';

const App = () => {

  const [connection, setConnection] = useState()
  const [messages, setMessages] = useState([])
  const joinRoom = async (user, room) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl('https://localhost:5001/chat')
        .configureLogging(LogLevel.Information)
        .build();

      connection.on('RecieveMessage', (user, message) => {
        console.log("recieved", user, message);
        setMessages(messages => [...messages, { user, message }])
      });

      await connection.start();
      await connection.invoke('JoinRoom', { user, room });
      setConnection(connection);

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="App">
      <h1>MyChat</h1>
      <hr className='line'></hr>
      <Lobby joinRoom={joinRoom}  >

      </Lobby>
    </div>
  );
}

export default App;
