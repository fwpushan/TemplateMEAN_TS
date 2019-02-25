import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '@/constants/routes';
import'../../styles/loginForm.scss';
import {login} from '../../utils/services/services'

export class LoginForm extends Component {

    onSubmitHandler = (event) => {
        event.preventDefault();

        let input = {
            username: null,
            password: null
        }
        input.username = event.target.children[0].value;
        input.password = event.target.children[2].value;
        
        //function call to API
        //DOUBLE CHECK TO MAKE SURE ASYNC IN LOGIN FINISHES BEFORE HISTORY.PUSH
        //let success = login(input);
        if (true) {//(success){
            this.props.history.push(routes.PILOT_LIST);
        }else{
            console.log("NOPE");
        }
    }

    render() {
        return (
            <div className="LoginForm">
                <form onSubmit={this.onSubmitHandler}>
                    <input className="LoginFormInput" type='email' placeholder= 'Username'/>
                    <br/>
                    <input className="LoginFormInput" type='password' placeholder='Password'/>
                    <br/>
                    <input type='submit' value='Login'/> 
                </form>
                
            </div>
        );
    }
}

export default withRouter(LoginForm);
