import React, { useState } from 'react';
import Welcome from './Welcome.jsx';
import Client from './Client.jsx';
import Server from './Server.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <main>
      {/* Determine if client or server */}
      {user ? user === 'client' ? <Client /> : <Server /> : <Welcome setUser={setUser} />}
    </main>
  );
};

export default App;