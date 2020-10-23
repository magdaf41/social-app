import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";



function Menu(props) {


    const logOut = (e) => {

        e.preventDefault();

        let user = JSON.parse(localStorage.getItem('exampleUser'))

        let headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + user.jwt
        }

        console.log(headers);
    }



    return (

        <nav className="menu">
            <ul>
                <li><Link to='/' >Home</Link></li>
                <Link to='/login'><li>Login</li></Link>
                <Link to='/signup'><li>Sign up</li></Link>
                <li><Link to='/' onClick={logOut}>Logout</Link></li>

            </ul>
        </nav>



    )
}

export default Menu;