import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import Dashboard from "./components/dashboard/dashboard"

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

                            <Route exact path="/login" render={(props) => this.props.isAuthenticated ? <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} /> : <LogIn {...props} />} />
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
        profileinfo: state.data.profile.data,
        isAuthenticated: state.data.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(App);
