import React, { useState } from 'react';
import { Forms, Input, SignInButton } from './Styled';

const Login = (props) => {
    const [newAcc, setNewAcc] = useState(false);
    return (
        <Forms login>
            {newAcc ? <Input type='text' name='name' placeholder='Role' login></Input> : null}
            {newAcc ? <Input type='text' name='name' placeholder='Name' login></Input> : null}
            <Input type='text' name='username' placeholder='Username' login></Input>
            <Input type='password' name='password' placeholder='Password' login></Input>
            {newAcc ? null : <SignInButton onClick={ev => {
                ev.preventDefault();
                console.log('clicked!');
            }}>SIGN IN</SignInButton>}
            <SignInButton onClick={ev => {
                ev.preventDefault();
                setNewAcc(!newAcc);
            }}>CREATE ACCOUNT</SignInButton>
        </Forms>
    );
};

export default Login;