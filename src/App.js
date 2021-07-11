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

        return (

            <div className="App">
                <BrowserRouter>
                    <div>

                        <Switch>
                            <Route exact path="/" render={(props) => this.state.isAuthenticated ? <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} /> : <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />} />
                            <Route exact path="/register" render={(props) => this.props.isAuthenticated ? <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} /> : <Register />} />
                            <Route exact path="/registeradmin" render={(props) => this.props.isAuthenticated ? <Redirect to={{ pathname: '/admin', state: { from: this.props.location } }} /> : <Adminregister />} />
                            <Route exact path="/admin" render={(props) => this.props.isAuthenticated ? <Admindashboard /> : <Adminregister />} />
                            <Route exact path="/login" render={(props) => this.props.isAuthenticated ? <>{this.props.who === 'user' ? <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} /> : <Redirect to={{ pathname: '/admin', state: { from: this.props.location } }} />}
                            </> : <LogIn {...props} />} />
                            <Route exact path="/dashboard" render={(props) => this.props.isAuthenticated ? <Dashboard /> : <Redirect to={{ pathname: '/register', state: { from: this.props.location } }} />} />

                        </Switch>

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps(state) {


    return {
        who: state.data.profile.who,
        profileinfo: state.data.profile.data,
        isAuthenticated: state.data.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(App);
