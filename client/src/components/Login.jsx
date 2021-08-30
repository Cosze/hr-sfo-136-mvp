import React, { useState } from 'react';
import { check, signIn, createAccount } from './requests';
import { Forms, Input, SignInButton, Select } from './Styled';

const Login = ({setUser}) => {
    const [newAcc, setNewAcc] = useState(false);
    const [valid, setValid] = useState(false);
    return (
        <Forms id='login' onSubmit={ev => {
            ev.preventDefault();
            document.getElementById('login').reset();
            setNewAcc(!newAcc);
        }} login>
            {newAcc ? (<Select name='role' login required>
                <option value='client'>Client</option>
                <option value='server'>Server</option>
            </Select>) : null}
            {newAcc ? <Input type='text' name='name' placeholder='Name' login required></Input> : null}
            {newAcc ?
            <Input type='text' name='username' placeholder='Username' onChange={ev => {
                check(ev.target.value, setValid);
            }} login required></Input> : <Input type='text' name='username' placeholder='Username' login required></Input>
            }
            <Input type='password' name='password' placeholder='Password' login required></Input>
            {newAcc ? null : <SignInButton onClick={ev => {
                ev.preventDefault();
                let form = new FormData(document.getElementById('login'));
                let formData = Object.fromEntries(form);
                document.getElementById('login').reset();
                signIn(formData, setUser);
            }}>SIGN IN</SignInButton>}
            <SignInButton onClick={ev => {
                // ev.preventDefault();
                if (!newAcc) {
                    ev.preventDefault();
                    setNewAcc(true);
                } else {
                    if (valid) {
                        let form = new FormData(document.getElementById('login'));
                        let formData = Object.fromEntries(form);
                        createAccount(formData, (data) => {
                            console.log(data);
                        });
                    } else {
                        ev.preventDefault();
                        alert('username already in use');
                    }
                }
            }}>CREATE ACCOUNT</SignInButton>
            {newAcc ? <SignInButton onClick={ev => setNewAcc(false)}>CANCEL</SignInButton> : null}
            <div style={{height:'10px', width:'10px', backgroundColor: 'red'}} onClick={ev => {
                console.log(valid);
            }}></div>
        </Forms>
    );
};

export default Login;