import React, { useState } from 'react';
import Welcome from './Welcome.jsx';
import Client from './Client.jsx';
import Server from './Server.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <main style={{maxWidth: '400px', height: '600px', backgroundColor:'#999', margin: '100px auto', position: 'relative'}}>
      {/* Determine if client or server */}
      {user ? user === 'guest' ? <Client /> : <Server /> : <Welcome setUser={setUser} />}
      {user ? <button style={{position: 'absolute', top: '1%', right:'2%', cursor:'pointer'}}
      onClick={() => setUser(null)}>Logout</button> : null}
    </main>
  );
};

export default App;