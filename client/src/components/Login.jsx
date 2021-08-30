import React from 'react';
import { Forms, Input, SignInButton } from './Styled';

const Login = (props) => {
    return (
        <Forms login>
            <Input type='text' name='username' placeholder='Username' login></Input>
            <Input type='password' name='password' placeholder='Password' login></Input>
            <SignInButton>SIGN IN</SignInButton>
            <SignInButton>CREATE ACCOUNT</SignInButton>
        </Forms>
    );
};

export default Login;