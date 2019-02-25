import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/navBar.scss';
import {logout} from '../../utils/services/services';
import logo from '../../assets/images/HarbourAirLogo.png';

    export class NavBar extends Component {
        state = {
            showMenu: false

        }

        showMenuHandler(event){
            event.preventDefault();
            this.setState({
                showMenu: !this.state.showMenu
            })
        }
        render(){
            return (
                <div className="Toolbar">
                    <img src={logo} style={{height: 60}}></img>
                    <button type="button" onClick={(event) => this.showMenuHandler(event)}>Menu</button>
                    {this.state.showMenu ? (
                    <div className="MenuButton">
                            <Link to="/">
                            <button type="button" onClick={() => logout()}>
                                Log Out
                            </button>
                        </Link>
                        <br/>
                        <Link to="/dashboard/change-password">
                            <button type="button">
                                Change Password
                            </button>
                        </Link>
                    </div>
                    )
                    : (
                        null
                    )}
                </div>
            );
        }

    }

export default NavBar;