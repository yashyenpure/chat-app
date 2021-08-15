import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const projectID = '5e629a47-4638-4c7e-8f95-893196981aea'

const App = () => {

  // if (!localStorage.getItem('username')) return <LoginForm />;


  return (

    <ChatEngine
      height ="100vh"
      projectID={projectID}
      userName='rajesh123'
      userSecret='123'
      renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    )
}
    
export default App;