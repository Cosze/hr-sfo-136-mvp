import React from 'react';

const Welcome = (props) => {
    const { setUser } = props;
    return (
        <div>
            <h1 style={{margin: '1em auto', textAlign: 'center'}}>Welcome!</h1>
            <div style={{backgroundColor: "green", padding: "1em", margin: '0 auto 1em', textAlign: 'center', maxWidth: '70%'}} onClick={() => setUser('guest')}>Guest</div>
            <div style={{backgroundColor: "purple", padding: "1em", margin: '0 auto 1em', textAlign: 'center', maxWidth: '70%'}} onClick={() => setUser('server')}>Server</div>
        </div>
    );
}

export default Welcome;