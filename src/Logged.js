import React, { Component } from 'react';
import axios from 'axios';

class Logged extends Component {



    componentDidMount() {

        const config = {
            headers: {
                'Content-Type': 'application/ json',
                'Accept': 'application / json',
                'Authorization': 'Bearer' + localStorage.getItem('token')
            }
        }

        axios.got('user', config).then(
            res => {
                console.log(res);
            },
            err => {
                console.log(err)
            }
        )
    }

    render() {
        return
    }
}

export default Logged;