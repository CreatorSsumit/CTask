import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"


import '../../assets/vendors/iconfonts/mdi/css/materialdesignicons.css';
import profile from "../../assets/images/profile/male/image_1.png";
import Quiz from "../test/quiz"
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import Performanceboard from "./perfomance";
import { connect } from "react-redux"


function Dashboard(props) {

    var history = useHistory();


    const [quiz, setquiz] = useState(false);
    const [date, setdate] = useState(new Date());
    const [quizno, setquizno] = useState(date.getDate());


    var list = [

        {
            type: 'html',
            question: {
                ques1: 'which option best describes your job role?',
                options: ['a', 'b', 'c', 'd']
            },

            answer: 'a'
        },
        {
            type: 'cplusplus',
            question: {
                ques1: 'which option best describes your job role?',
                options: ['a', 'b', 'c', 'd']
            },

            answer: 'a'
        },
        {
            type: 'js',
            question: {
                ques1: 'which option best describes your job role?',
                options: ['a', 'b', 'c', 'd']
            },

            answer: 'a'
        }

        ,
        {
            type: 'html',
            question: {
                ques1: 'which option best describes your job role?',
                options: ['a', 'b', 'c', 'd']
            },

            answer: 'b'
        },
        {
            type: 'html',
            question: {
                ques1: 'which option best describes your job role?',
                options: ['a', 'b', 'c', 'd']
            },

            answer: 'c'
        },

    ]






    return (
        <div>


            <nav class="t-header">
                {/* <div class="t-header-brand-wrapper">

                </div> */}
                <div style={{ background: '#efefef' }} class="t-header-content-wrapper">
                    <div class="t-header-content">
                        <img src='https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png' style={{ width: '170px' }} />

                        <ul class="nav ml-auto">
                            <li class="nav-item dropdown">




                                <a type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="mdi mdi-apps mdi-1x"></i>
                                </a>
                                <ul style={{ backgroundColor: 'white', borderRadius: '10px', border: 'none' }} class="dropdown-menu navbar-dropdown dropdown-menu-right" aria-labelledby="appsDropdown">
                                    <div style={{ background: 'none' }} class="dropdown-header">
                                        <h6 class="dropdown-title">Dashboard</h6>
                                        <p class="dropdown-title-text mt-2">Explore your Exam performance</p>

                                        <a style={{ cursor: 'pointer' }} onClick={() => { localStorage.clear(); history.push('/login'); localStorage.clear(); }} class="dropdown-grid">

                                            <button style={{ background: '#459DF9' }} type="button" class="btn btn-info btn-sm">LogOut</button>
                                        </a>
                                    </div><center>
                                        <div style={{ background: 'none' }} class="dropdown-body border-top pt-0">
                                            <a style={{ cursor: 'pointer' }} onClick={() => setquiz(false)} class="dropdown-grid">
                                                <i class="mdi mdi-gauge link-icon"></i>
                                                <span class="grid-tittle">Dashboard</span>
                                            </a>
                                            <a style={{ cursor: 'pointer' }} onClick={() => setquiz(true)} class="dropdown-grid">
                                                <i class="mdi mdi-clipboard-outline link-icon"></i>
                                                <span class="grid-tittle">Quiz</span>
                                            </a>

                                            <a style={{ cursor: 'pointer' }} onClick={() => setquiz(true)} class="dropdown-grid">
                                                <i class="mdi mdi-bullseye link-icon"></i>
                                                <span class="grid-tittle">Export</span>
                                            </a>


                                        </div></center>

                                </ul>





                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="page-body">

                <div style={{ background: '#efefef' }} class="sidebar">
                    <div class="user-profile">
                        <div class="display-avatar animated-avatar">
                            <img class="profile-img img-lg rounded-circle" src={profile}
                                alt="profile image" />
                        </div>
                        <div class="info-wrapper">
                            <p class="user-name">{props.state.data.profile.data.email}</p>

                        </div>
                    </div>
                    <ul class="navigation-menu">
                        <li style={{ background: '#efefef' }} class="nav-category-divider">MAIN</li>
                        <li>
                            <a onClick={() => setquiz(false)} style={{ cursor: 'pointer' }} >
                                <span class="link-title">Dashboard</span>
                                <i class="mdi mdi-gauge link-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setquiz(true)} style={{ cursor: 'pointer' }}>
                                <span class="link-title">Quiz Test</span>

                                <i class="mdi mdi-clipboard-outline link-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a >
                                <span class="link-title">Export In Pdf</span>
                                <i class="mdi mdi-bullseye link-icon"></i>
                            </a>

                        </li>
                        <li>
                            <a style={{ cursor: 'pointer' }} onClick={() => { localStorage.clear(); history.push('/login'); localStorage.clear(); }} class="dropdown-grid">

                                <button style={{ background: '#459DF9' }} type="button" class="btn btn-info w-full">LogOut</button>
                            </a>
                        </li>
                        {/*  <li>
                            <a href="pages/charts/chartjs.html">
                                <span class="link-title">Charts</span>
                                <i class="mdi mdi-chart-donut link-icon"></i>
                            </a>
                        </li> */}

                    </ul>

                </div>


                <div class="page-content-wrapper">
                    {quiz ? <> <div className='py-3 d-flex'><h6>Quiz No {quizno}</h6> &nbsp;&nbsp;&nbsp; <small>{date.toLocaleDateString()} </small> </div> <Quiz state={props.state} list={list} /> </> : <Performanceboard state={props.state} />}


                    <footer class="footer">
                        <div class="row">
                            <div class="col-sm-6 text-center text-sm-right order-sm-1">
                                <ul class="text-gray">
                                    <li><a href="#">Terms of use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 text-center text-sm-left mt-3 mt-sm-0">
                                <small class="text-muted d-block">Copyright © 2021 . All rights reserved</small>
                                <small class="text-gray mt-2">Handcrafted With <i class="mdi mdi-heart text-danger"></i> for Capgemini task</small>
                            </div>
                        </div>
                    </footer>

                </div>

            </div>

        </div >
    )
}

function mapStateToProps(state) {



    return {
        state: state
    }
}

export default connect(mapStateToProps, null)(Dashboard);
