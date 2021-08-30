import React, { useState } from 'react';
import { check, signIn, createAccount } from './requests';
import { Forms, Input, SignInButton, Select } from './Styled';

const Login = ({setUser}) => {
    const [newAcc, setNewAcc] = useState(false);
    const [test, setTest] = useState(false);
    return (
        <Forms id='login' login>
            {newAcc ? (<Select name='role' login>
                <option value='client'>Client</option>
                <option value='server'>Server</option>
            </Select>) : null}
            {newAcc ? <Input type='text' name='name' placeholder='Name' login></Input> : null}
            <Input type='text' name='username' placeholder='Username' login></Input>
            <Input type='password' name='password' placeholder='Password' login></Input>
            {newAcc ? null : <SignInButton onClick={ev => {
                ev.preventDefault();
                let form = new FormData(document.getElementById('login'));
                let formData = Object.fromEntries(form);
                signIn(formData, setUser);
            }}>SIGN IN</SignInButton>}
            <SignInButton onClick={ev => {
                ev.preventDefault();
                setNewAcc(!newAcc);
            }}>CREATE ACCOUNT</SignInButton>
            <div style={{height:'10px', width:'10px', backgroundColor: 'red'}} onClick={ev => {
                console.log(test);
            }}></div>
        </Forms>
    );
};

export default Login;