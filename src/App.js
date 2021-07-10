import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux"


library.add(faEdit);

class App extends Component {

    state = {

        isAuthenticated: false,
        user: null
    }



    render() {

        return (

            <div className="App">
                <Router>
                    <div>

                        <Switch>
                            <Route exact path="/" render={(props) => this.state.isAuthenticated ? <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} /> : <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />} />
                            <Route exact path="/register" render={(props) => this.props.isAuthenticated ? <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} /> : <Register />} />

                            <Route exact path="/login" render={(props) => this.props.isAuthenticated ? <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} /> : <LogIn {...props} />} />
                            <Route exact path="/dashboard" render={(props) => this.props.isAuthenticated ? <LogIn {...props} /> : <Redirect to={{ pathname: '/register', state: { from: this.props.location } }} />} />

                        </Switch>

                    </div>
                </Router>
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
