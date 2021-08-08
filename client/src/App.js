import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const loadUserDetails = async () => {
    const response = await axios.get('/production/api/users/me/');
    return response.data;
  };
  const [userData, setUserData] = useState(false);
  useEffect(() => {
    loadUserDetails().then((payload) => {
      setUserData(payload);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hello, World!</h1>
        <h2>I'm {(userData && userData.username) || 'Unknown User'}</h2>
      </header>
    </div>
  );
}

export default App;
