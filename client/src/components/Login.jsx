import React from 'react';
import { Forms, Input, SignInButton } from './Styled';

const Login = (props) => {
    return (
        <Forms login>
            <Input type='text' name='username' placeholder='Username' login></Input>
            <Input type='password' name='password' placeholder='Password' login></Input>
            <SignInButton onClick={ev => {
                ev.preventDefault();
                console.log('clicked!');
            }}>SIGN IN</SignInButton>
            <SignInButton onClick={ev => {
                ev.preventDefault();
                console.log('clicked!');
            }}>CREATE ACCOUNT</SignInButton>
        </Forms>
    );
};

export default Login;