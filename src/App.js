import React, { useState } from 'react';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const hardcodeduser = 'user';
const hardcodedpass = 'password';

const handleSubmit = (e) => {
  e.preventDefault();
  if (username === hardcodeduser && password === hardcodedpass) {
    setIsLoggedIn(true);
    setMessage('Welcome, user!')
  } else {
    setMessage('Invalid username or password')
  }
};

  return (
    <div>
      <h1>Login Page</h1>
      {isLoggedIn && <h2>{message}</h2>}
      {!isLoggedIn && (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:
          </label>
            <input type='text' onChange={(e) => setUsername(e.target.value)} required />
          <br></br>
          <label>Password:
          </label>
            <input type='password' onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type='submit'>Submit</button>
        {message && <h2>{message}</h2>}
      </form>
      )}
    </div>
  );
}

export default App;
