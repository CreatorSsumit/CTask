import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import LogIn from './components/auth/LogIn';
import Adminregister from './components/auth/admin';
import Register from './components/auth/Register';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import Dashboard from "./components/dashboard/dashboard"
import AdminDashboard from "./components/dashboard/admindashboard"
import Admindashboard from './components/dashboard/admindashboard';

library.add(faEdit);

class App extends Component {

    state = {

        isAuthenticated: false,
        user: null
    }




    render() {
        console.log(this.props.profileinfo);
        return (

            <div className="App">
                <BrowserRouter >
                    <div>

                        <Switch>
                            <Route exact path="/" render={(props) => this.props.profileinfo ? <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} /> : <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />} />
                            <Route exact path="/register" render={(props) => this.props.profileinfo ? <Redirect to={{ pathname: '/login', state: { from: this.props.location, newuser: 'User created do login' } }} /> : <Register />} />
                            <Route exact path="/registeradmin" render={(props) => this.props.profileinfo ? <Redirect to={{ pathname: '/admin', state: { from: this.props.location } }} /> : <Adminregister />} />

                            <Route exact path="/admin" render={(props) => this.props.profileinfo ? <Admindashboard /> : <Adminregister />} />
                            <Route exact path="/login" render={(props) => (this.props.profileinfo && localStorage.getItem('user')) ? <>{this.props.who === 'user' ? <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} /> : <> {this.props.who === 'admin' ? <Redirect to={{ pathname: '/admin', state: { from: this.props.location } }} /> : <LogIn />} </>}
                            </> : <LogIn newuser={this.props.profileinfo ? this.props.profileinfo.username ? 'User created do login' :
                                " " : " "}    {...props} />} />
                            <Route exact path="/dashboard" render={(props) => this.props.profileinfo && localStorage.getItem('user') ? <Dashboard /> : <Redirect to={{ pathname: '/register', state: { from: this.props.location } }} />} />
                            <Route exact path="/logout" render={() => <Redirect to={{ pathname: '/login' }} />} />

                        </Switch>

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


function mapStateToProps(state) {


    return {
        msg: state.data.msg,
        who: state.data.profile.who,
        profileinfo: state.data.profile.data,
        isAuthenticated: state.data.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(App);
