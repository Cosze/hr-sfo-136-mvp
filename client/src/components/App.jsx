import React, { useState } from 'react';
import Welcome from './Welcome.jsx';
import Login from './Login.jsx';
import Client from './Client.jsx';
import Server from './Server.jsx';
import { MainHeader } from './Styled';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <main style={{width: '277px', height: '580px', backgroundColor:'#fff', margin: '100px auto', position: 'relative', display: 'flex', flexDirection: 'column'}}>
      <MainHeader><img src='https://i.imgur.com/KH6GDoR.png' alt='main logo' style={{width: '100%'}}/></MainHeader>
      {/* Determine if client or server */}
      {(user => {
        if (user === 'client') {
          return <Client />
        } else if (user === 'server') {
          return <Server />
        } else {
          return <Login setUser={setUser} />
        }
      })(user)}
      {user === 'client' || user === 'server' ? <button style={{position: 'absolute', top: '1%', right:'2%', cursor:'pointer'}}
      onClick={() => setUser(null)}>Logout</button> : null}
    </main>
  );
};

export default App;