import './App.css';
import { useState, useEffect } from 'react';
import UserEntry from './UserEntry';
import NavigationBar from './NavigationBar'

function App() {
  const [isLoading, setLoading] = useState(true);
  const [logedIn, setLogedIn] = useState();
  const [uname, setUname] = useState('');
  const [styles, setStyles] = useState({bgColor:'white',txColor:'black'});

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await fetch('http://localhost:8000/userStatus/');
        if (!response.ok) {
          throw new Error('Http Response Error');
        }
        const data = await response.json();
        setLogedIn(() => data[0].user_status);
        setUname(() => data[0].username);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(() => false)
      }
    }
    userData()
  }, []);

  const logOutUser = () => {
    const userData = async () => {
      try {
        setLogedIn(false)
        const response = await fetch('http://localhost:8000/userStatus/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 'user_status': false, 'username': uname }),
        });
        if (!response.ok) {
          throw new Error('Http Response Error');
        }
      } catch (error) {
        console.error(error);
      }
    }
    userData()
  };

  const changeLoginState = (val) => {
    setLogedIn(() => val)
  };

  const setUsername = (val) => {
    setUname(() => val);
  };

  return (
    <div className="App">
      {!isLoading && (logedIn ? <NavigationBar changeLoginState={changeLoginState} styles={styles} setStyles={setStyles} logOutUser={logOutUser} username={uname} /> : <UserEntry changeLoginState={changeLoginState} setUsername={setUsername} />)}
    </div>
  );
}

export default App;
