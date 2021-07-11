import React, { useEffect, useState } from 'react'

import '../../assets/vendors/iconfonts/mdi/css/materialdesignicons.css';
import profile from "../../assets/images/profile/male/image_1.png";
import HtmlQuiz from "../test/html"
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import Performanceboard from "./perfomance";



export default function Dashboard() {


    const [quiz, setquiz] = useState(false);
    const [date, setdate] = useState(new Date());
    const [quizno, setquizno] = useState(date.getDate());




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
                                        <p class="dropdown-title-text mt-2">Explore your test performance</p>
                                    </div>
                                    <div style={{ background: 'none' }} class="dropdown-body border-top pt-0">
                                        <a class="dropdown-grid">
                                            <i class="grid-icon mdi mdi-jira mdi-2x"></i>
                                            <span class="grid-tittle">Analysis</span>
                                        </a>
                                        <a class="dropdown-grid">
                                            <i class="grid-icon mdi mdi-trello mdi-2x"></i>
                                            <span class="grid-tittle">Trello</span>
                                        </a>
                                        <a class="dropdown-grid">
                                            <i class="grid-icon mdi mdi-artstation mdi-2x"></i>
                                            <span class="grid-tittle">Artstation</span>
                                        </a>
                                        <a class="dropdown-grid">
                                            <i class="grid-icon mdi mdi-bitbucket mdi-2x"></i>
                                            <span class="grid-tittle">Bitbucket</span>
                                        </a>
                                    </div>
                                    <div class="dropdown-footer">
                                        <a href="#">View All</a>
                                    </div>
                                </ul>





                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="page-body">
                {/* <!-- partial:partials/_sidebar.html --> */}
                <div style={{ background: '#efefef' }} class="sidebar">
                    <div class="user-profile">
                        <div class="display-avatar animated-avatar">
                            <img class="profile-img img-lg rounded-circle" src={profile}
                                alt="profile image" />
                        </div>
                        <div class="info-wrapper">
                            <p class="user-name">Allen Clerk</p>
                            <h6 class="display-income">$3,400,00</h6>
                        </div>
                    </div>
                    <ul class="navigation-menu">
                        <li style={{ background: '#efefef' }} class="nav-category-divider">MAIN</li>
                        <li>
                            <a style={{ cursor: 'pointer' }} >
                                <span onClick={() => setquiz(false)} class="link-title">Dashboard</span>
                                <i class="mdi mdi-gauge link-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a style={{ cursor: 'pointer' }}>
                                <span onClick={() => setquiz(true)} class="link-title">Quiz Test</span>

                                <i class="mdi mdi-clipboard-outline link-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a >
                                <span class="link-title">UI Elements</span>
                                <i class="mdi mdi-bullseye link-icon"></i>
                            </a>

                        </li>
                        <li>
                            <a href="pages/forms/form-elements.html">
                                <span class="link-title">Forms</span>
                                <i class="mdi mdi-clipboard-outline link-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a href="pages/charts/chartjs.html">
                                <span class="link-title">Charts</span>
                                <i class="mdi mdi-chart-donut link-icon"></i>
                            </a>
                        </li>

                    </ul>

                </div>


                <div class="page-content-wrapper">
                    {quiz ? <> <div className='py-3 d-flex'><h6>Quiz No {quizno}</h6> &nbsp;&nbsp;&nbsp; <small>{date.toLocaleDateString()} </small> </div> <HtmlQuiz /> </> : <Performanceboard />}


                    <footer class="footer">
                        <div class="row">
                            <div class="col-sm-6 text-center text-sm-right order-sm-1">
                                <ul class="text-gray">
                                    <li><a href="#">Terms of use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 text-center text-sm-left mt-3 mt-sm-0">
                                <small class="text-muted d-block">Copyright © 2019 <a href="http://www.uxcandy.co"
                                    target="_blank">UXCANDY</a>. All rights reserved</small>
                                <small class="text-gray mt-2">Handcrafted With <i class="mdi mdi-heart text-danger"></i></small>
                            </div>
                        </div>
                    </footer>

                </div>

            </div>

        </div>
    )
}
