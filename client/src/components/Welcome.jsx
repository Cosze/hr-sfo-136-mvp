import React from 'react';

const Welcome = (props) => {
    const { setUser } = props;
    return (
        <div>
            <h1>Welcome!</h1>
            <div style={{border: "1px solid red", padding: "1em"}} onClick={() => setUser('guest')}>Guest</div>
            <div style={{border: "1px solid blue", padding: "1em"}} onClick={() => setUser('server')}>Server</div>
        </div>
    );
}

export default Welcome;