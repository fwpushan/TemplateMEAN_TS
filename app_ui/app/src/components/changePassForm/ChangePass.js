import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import {changePass} from '../../utils/services/services';

    export class ChangePass extends Component {

        onSubmitHandler = (event) =>{
            event.preventDefault();
            let input = {
                oldPass: null,
                newPass: null,
                newPassConfirm: null
            }
            input.oldPass = event.target.children[0].value;
            input.newPass = event.target.children[2].value;
            input.newPassConfirm = event.target.children[4].value;

            if ((input.newPass == input.newPassConfirm) && (input.newPass.length >= 6)){
                if( input.newPass.match(/[^a-zA-Z0-9]/) && 
                    input.newPass.match(/[A-Z]/) && 
                    input.newPass.match(/[a-z]/) && 
                    input.newPass.match(/[0-9]/))
                    {
                        //Change Pass will return true if database is sucessfully updated with new user password
                        if(changePass({pass: input.oldPass, newPassword: input.newPass})){
                            window.alert("Password has been successfully changed.")
                        }else{
                            window.alert("Password not successfuly changed, please try again")
                        }
                }else{
                    window.alert("Password does not contain atleast one of each of: Uppercase, Lowercase, Numeric, and Special characters")
                }
            }else{
                window.alert("Passwords do not match, and must be 6 or more characters")
            }
        }
        render(){
            return (
                <div>
                    <form className="LoginForm" onSubmit= {this.onSubmitHandler}>
                        <input className="LoginFormInput" type='password' placeholder= 'Old Password'/>
                        <br/>
                        <input className="LoginFormInput" type='password' placeholder='New Password'/>
                        <br/>
                        <input className="LoginFormInput" type='password' placeholder='Confirm new Password'/>
                        <br/>
                        <p>Passwords must be at least 6 characters, and contain at least one number, one special character (!_*?), one upper case, and one lower case letter.</p>
                        <input type='submit' value='Change Password'/> 
                    </form>
                </div>
            );
        } 
    }

export default withRouter(ChangePass);