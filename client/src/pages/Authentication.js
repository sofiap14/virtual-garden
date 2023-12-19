import React from 'react';
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import UserProfile from "./UserProfile";
import axios from 'axios';

const Authentication = () => {
    function callAPI() {
        axios.get('http://localhost:3000/')
            .then(response => console.log(response.data))
            .catch(error => console.log(error.message));
    }

    function callProtectedAPI() {
        axios.get('http://localhost:3000/protected')
            .then(response => console.log(response.data))
            .catch(error => console.log(error.message));
    }

    return (
        <div>
            <LoginButton />
            <UserProfile />
            <LogoutButton />
            <ul>
                <li>
                    <button onClick={callAPI}>Call API Route</button>
                </li>
                <li>
                    <button onClick={callProtectedAPI}>Call Protected API Route</button>
                </li>
            </ul>
        </div>
    );
}

export default Authentication;
