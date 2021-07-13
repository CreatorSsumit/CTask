import React from 'react';
import { Line } from "react-chartjs-2";
import './admin.css';

export default function Admindashboard(props) {
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
                                    </div><center>
                                        <div style={{ background: 'none' }} class="dropdown-body border-top pt-0">
                                            <a style={{ cursor: 'pointer' }} class="dropdown-grid">
                                                <i class="mdi mdi-gauge link-icon"></i>
                                                <span class="grid-tittle">Dashboard</span>
                                            </a>
                                            <a style={{ cursor: 'pointer' }} class="dropdown-grid">
                                                <i class="mdi mdi-clipboard-outline link-icon"></i>
                                                <span class="grid-tittle">Quiz</span>
                                            </a>

                                            <a style={{ cursor: 'pointer' }} class="dropdown-grid">
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
                            <img class="profile-img img-lg rounded-circle"
                                alt="profile image" />
                        </div>
                        <div class="info-wrapper">
                            <p class="user-name">sumit</p>

                        </div>
                    </div>
                    <ul class="navigation-menu">
                        <li style={{ background: '#efefef' }} class="nav-category-divider">MAIN</li>
                        <li>
                            <a style={{ cursor: 'pointer' }} >
                                <span class="link-title">Dashboard</span>
                                <i class="mdi mdi-gauge link-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a style={{ cursor: 'pointer' }}>
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
                        {/*   <li>
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
                        </li> */}

                    </ul>

                </div>


                <div class="page-content-wrapper">

                    <div class='md:flex sm-block wrapper w-100 mt-4'>
                        <div style={{ position: 'relative' }} class="col-6 col-md-6 equel-grid ">
                            <div class="grid">
                                <div class="grid-body d-flex flex-column h-100">
                                    <div class="wrapper">
                                        <div class="d-flex justify-content-between">
                                            <div class="split-header">
                                                <img class="img-ss mt-1 mb-1 mr-2" src="https://image.flaticon.com/icons/png/512/216/216877.png"
                                                    alt="instagram" />
                                                <p class="card-title">User Register Growth</p>
                                            </div>

                                        </div>
                                        <div class="d-flex align-items-end pt-2 mb-4">
                                            <h4>16</h4>
                                            <p class="ml-2 text-muted">Total User Registered</p>
                                        </div>
                                    </div>
                                    <div class="mt-auto">

                                        <Line class='linebar' data={{
                                            labels: 'jhgfc',
                                            datasets: [{
                                                label: 'My First Dataset',
                                                data: [65, 59, 80, 81, 56, 55, 40],
                                                fill: false,
                                                borderColor: 'rgb(84, 108, 242)',
                                                tension: 0.1
                                            }]

                                        }}
                                            width={'20%'}
                                            height={20}

                                            options={{
                                                maintainAspectRatio: false, scales: {
                                                    yAxes: [{ ticks: { beginAtZero: true } }]
                                                },
                                                animations: {
                                                    tension: {
                                                        duration: 1000,
                                                        easing: 'linear',
                                                        from: 1,
                                                        to: 0,
                                                        loop: true
                                                    }
                                                },
                                            }} />



                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-6 equel-grid">
                            <div class="grid">
                                <div class="grid-body">
                                    <div class="split-header">
                                        <p class="card-title"> Recent Activity Log</p>

                                    </div>
                                    <div class="vertical-timeline-wrapper">
                                        <div class="timeline-vertical dashboard-timeline">
                                            <div class="activity-log">
                                                <p class="log-name">Agnes Holt</p>
                                                <div class="log-details">Analytics dashboard has been created<span
                                                    class="text-primary ml-1">#Slack</span></div>
                                                <small class="log-time">8 mins Ago</small>
                                            </div>

                                            <div class="activity-log">
                                                <p class="log-name">Charlie Newton</p>
                                                <div class="log-details"> Approved your request <div class="wrapper mt-2">
                                                    <button type="button" class="btn btn-xs btn-primary">Approve</button>
                                                    <button type="button" class="btn btn-xs btn-inverse-primary">Reject</button>
                                                </div>
                                                </div>
                                                <small class="log-time">2 Hours Ago</small>
                                            </div>
                                            <div class="activity-log">
                                                <p class="log-name">Gussie Page</p>
                                                <div class="log-details">Added new task: Slack home page</div>
                                                <small class="log-time">4 Hours Ago</small>
                                            </div>
                                            <div class="activity-log">
                                                <p class="log-name">Ina Mendoza</p>
                                                <div class="log-details">Added new images</div>
                                                <small class="log-time">8 Hours Ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>


                    <div class="col-lg-12">
                        <div class="grid">
                            <p class="grid-header">Image&Components Table</p>
                            <div class="item-wrapper">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Progress</th>
                                                <th>Earnings</th>
                                                <th>Target</th>
                                                <th>Points</th>
                                                <th>Sales</th>
                                                <th>Started</th>
                                                <th>Deadline</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td class="pr-0 pl-4">
                                                    <img class="profile-img img-sm" src="../assets/images/profile/male/image_4.png"
                                                        alt="profile image" />
                                                </td>
                                                <td class="pl-md-0">
                                                    <small class="text-black font-weight-medium d-block">Barbara Curtis</small>
                                                    <span class="text-gray">
                                                        <span class="status-indicator rounded-indicator small bg-primary"></span>Account Deactivated
                                                    </span>
                                                </td>
                                                <td>
                                                    <div class="progress progress-slim">
                                                        <div class="progress-bar bg-info progress-bar-striped" role="progressbar" style={{ width: "35%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>$23,563</td>
                                                <td>$30,000</td>
                                                <td>3454</td>
                                                <td class="text-success"> 15.67% <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td>Jul 12, 2019 </td>
                                                <td>Jar 23, 2019 </td>
                                                <td class="actions">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="d-flex align-items-center">
                                                    <img class="profile-img img-sm img-rounded mr-2" src="../../../assets/images/profile/male/image_7.png" alt="profile image" />
                                                    <span>Curtis Greer</span>
                                                </td>
                                                <td>
                                                    <div class="progress progress-slim">
                                                        <div class="progress-bar bg-success progress-bar-striped" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>$14,435</td>
                                                <td>$30,000</td>
                                                <td>3454</td>
                                                <td class="text-danger"> 23.05% <i class="mdi mdi-arrow-down"></i>
                                                </td>
                                                <td>Jul 12, 2019 </td>
                                                <td> May 15, 2019 </td>
                                                <td class="actions">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="d-flex align-items-center">
                                                    <img class="profile-img img-sm img-rounded mr-2" src="../../../assets/images/profile/female/image_10.png" alt="profile image" />
                                                    <span>Lettie Phillips</span>
                                                </td>
                                                <td>
                                                    <div class="progress progress-slim">
                                                        <div class="progress-bar bg-primary progress-bar-striped" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>$16,745</td>
                                                <td>$30,000</td>
                                                <td>3454</td>
                                                <td class="text-success"> 23.05% <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td>Jul 12, 2019 </td>
                                                <td> May 15, 2019 </td>
                                                <td class="actions">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="d-flex align-items-center">
                                                    <img class="profile-img img-sm img-rounded mr-2" src="../../../assets/images/profile/female/image_1.png" alt="profile image" />
                                                    <span>Rachel Garza</span>
                                                </td>
                                                <td>
                                                    <div class="progress progress-slim">
                                                        <div class="progress-bar bg-danger progress-bar-striped" role="progressbar" style={{ width: "45%" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>$34,546</td>
                                                <td>$30,000</td>
                                                <td>3454</td>
                                                <td class="text-success"> 67.23% <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td>Jul 12, 2019 </td>
                                                <td>Apr 06, 2019 </td>
                                                <td class="actions">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="d-flex align-items-center">
                                                    <img class="profile-img img-sm img-rounded mr-2" src="../../../assets/images/profile/male/image_3.png" alt="profile image" />
                                                    <span>Estelle Guzman</span>
                                                </td>
                                                <td>
                                                    <div class="progress progress-slim">
                                                        <div class="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: "35%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>$23,657</td>
                                                <td>$30,000</td>
                                                <td>3454</td>
                                                <td class="text-danger"> 12.45% <i class="mdi mdi-arrow-down"></i>
                                                </td>
                                                <td>Jul 12, 2019 </td>
                                                <td>Jul 12, 2019 </td>
                                                <td class="actions">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

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


        </div>
    )
}
