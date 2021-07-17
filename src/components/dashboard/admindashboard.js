import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import './admin.css';
import profile from "../../assets/images/profile/male/image_1.png";
import { connect } from "react-redux";
import axios from 'axios'



function Admindashboard(props) {

    const [alldatas, setalldatas] = useState('');



    var fetchdata = () => {

        axios.get('http://localhost:4000/alluserkeyvalue').then(e => e.data ? setalldatas(e.data) : [])


    }


    useEffect(() => {

        fetchdata();


    }, []);

    if (alldatas) {
        console.log(alldatas.alldata.length)
    }

    return (
        <div>



            <nav class="t-header">
                {/* <div class="t-header-brand-wrapper">

                </div> */}
                <div style={{ background: '#f3f3f3' }} class="t-header-content-wrapper">
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
                                                <span class="grid-tittle"> Users Permissions</span>
                                            </a>

                                            <a style={{ cursor: 'pointer' }} class="dropdown-grid">
                                                <i class="mdi mdi-bullseye link-icon"></i>
                                                <span class="grid-tittle">Notification</span>
                                            </a>

                                        </div></center>

                                </ul>





                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="page-body">

                <div style={{ background: '#f3f3f3' }} class="sidebar">
                    <div class="user-profile">
                        <div class="display-avatar animated-avatar">
                            <img class="profile-img img-lg rounded-circle"
                                alt="profile image" src={profile} />
                        </div>
                        <div class="info-wrapper">
                            <p class="user-name">sumit</p>

                        </div>
                    </div>
                    <ul class="navigation-menu">
                        <li style={{ background: '#f3f3f3' }} class="nav-category-divider">MAIN</li>
                        <li>
                            <a style={{ cursor: 'pointer' }} >
                                <span class="link-title">Dashboard</span>
                                <i class="mdi mdi-gauge link-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a style={{ cursor: 'pointer' }}>
                                <span class="link-title "> Users Permissions</span>

                                <i class="mdi mdi-clipboard-outline link-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a >
                                <span class="link-title">Notification</span>
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


                <div style={{ backgroundColor: '#' }} class="page-content-wrapper">

                    <div class='md:flex sm-block wrapper w-100 mt-4'>
                        <div style={{ position: 'relative' }} class="col-6 col-md-6 equel-grid ">
                            <div class="grid">
                                <div style={{ backgroundColor: 'white', borderRadius: '10px' }} class="grid-body d-flex flex-column h-100">
                                    <div class="wrapper">
                                        <div class="d-flex justify-content-between">
                                            <div class="split-header">
                                                <img class="img-ss mt-1 mb-1 mr-2" src="https://image.flaticon.com/icons/png/512/216/216877.png"
                                                    alt="instagram" />
                                                <p class="card-title">User Register Growth</p>
                                            </div>

                                        </div>
                                        <div class="d-flex align-items-end pt-2 mb-4">

                                            <p class="ml-2 text-muted">Total <span className='font-weight-bold text-primary'>{alldatas ? alldatas.alldata.length : 0}</span> User Registered</p>
                                        </div>
                                    </div>
                                    <div class="mt-auto">

                                        <Line class='linebar' data={{
                                            labels: alldatas ? Object.keys(alldatas.count).reverse() : [],
                                            datasets: [{
                                                label: 'My First Dataset',
                                                data: alldatas ? Object.values(alldatas.count).reverse() : [],
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
                                <div style={{ backgroundColor: 'white', borderRadius: '10px' }} class="grid-body">
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
                            <p class="grid-header">User Performances</p>
                            <div style={{ overflowX: 'scroll' }} class="item-wrapper">
                                <div class="table-responsive overflow-auto">
                                    <table class="table border-none">
                                        <thead>
                                            <tr>
                                                <th>Profile Pic</th>
                                                <th>Detail</th>
                                                <th>Total Points</th>
                                                <th>Html Points</th>
                                                <th>JavaScript Points</th>
                                                <th>C++ Points</th>
                                                <th>Python Points</th>
                                                <th>Joining date</th>






                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td class="pr-0 pl-4">
                                                    <img class="profile-img img-sm" src={profile}
                                                        alt="profile image" />
                                                </td>
                                                <td class="pl-md-0">
                                                    <small class="text-black font-weight-medium d-block">Barbara Curtis</small>
                                                    <span class="text-gray">
                                                        <span class="status-indicator rounded-indicator small bg-primary"></span>Activated
                                                    </span>
                                                </td>

                                                <td class="text-success">563 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success">700 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success"> 86 &nbsp;  15.67%  <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-success"> 86 &nbsp; 15.67% <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-danger">86 &nbsp; 23.05% <i class="mdi mdi-arrow-down"></i> </td>
                                                <td>Jar 23, 2019 </td>
                                                <td style={{ cursor: 'pointer' }} class="actions">
                                                    <img style={{ width: '15px' }} src='https://maxcdn.icons8.com/Share/icon/Dusk_Wired/Editing/edit1600.png' />
                                                </td>
                                            </tr>
                                            <tr>

                                                <td class="pr-0 pl-4">
                                                    <img class="profile-img img-sm" src={profile}
                                                        alt="profile image" />
                                                </td>
                                                <td class="pl-md-0">
                                                    <small class="text-black font-weight-medium d-block">Barbara Curtis</small>
                                                    <span class="text-gray">
                                                        <span class="status-indicator rounded-indicator small bg-primary"></span>Activated
                                                    </span>
                                                </td>

                                                <td class="text-success">563 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success">700 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success"> 86 &nbsp;  15.67%  <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-success"> 86 &nbsp; 15.67% <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-danger">86 &nbsp; 23.05% <i class="mdi mdi-arrow-down"></i> </td>
                                                <td>Jar 23, 2019 </td>
                                                <td style={{ cursor: 'pointer' }} class="actions">
                                                    <img style={{ width: '15px' }} src='https://maxcdn.icons8.com/Share/icon/Dusk_Wired/Editing/edit1600.png' />
                                                </td>
                                            </tr>
                                            <tr>

                                                <td class="pr-0 pl-4">
                                                    <img class="profile-img img-sm" src={profile}
                                                        alt="profile image" />
                                                </td>
                                                <td class="pl-md-0">
                                                    <small class="text-black font-weight-medium d-block">Barbara Curtis</small>
                                                    <span class="text-gray">
                                                        <span class="status-indicator rounded-indicator small bg-primary"></span>Activated
                                                    </span>
                                                </td>

                                                <td class="text-success">563 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success">700 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success"> 86 &nbsp;  15.67%  <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-success"> 86 &nbsp; 15.67% <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-danger">86 &nbsp; 23.05% <i class="mdi mdi-arrow-down"></i> </td>
                                                <td>Jar 23, 2019 </td>
                                                <td style={{ cursor: 'pointer' }} class="actions">
                                                    <img style={{ width: '15px' }} src='https://maxcdn.icons8.com/Share/icon/Dusk_Wired/Editing/edit1600.png' />
                                                </td>
                                            </tr>

                                            <tr>

                                                <td class="pr-0 pl-4">
                                                    <img class="profile-img img-sm" src={profile}
                                                        alt="profile image" />
                                                </td>
                                                <td class="pl-md-0">
                                                    <small class="text-black font-weight-medium d-block">Barbara Curtis</small>
                                                    <span class="text-gray">
                                                        <span class="status-indicator rounded-indicator small bg-primary"></span>Activated
                                                    </span>
                                                </td>

                                                <td class="text-success">563 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success">700 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success"> 86 &nbsp;  15.67%  <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-success"> 86 &nbsp; 15.67% <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-danger">86 &nbsp; 23.05% <i class="mdi mdi-arrow-down"></i> </td>
                                                <td>Jar 23, 2019 </td>
                                                <td style={{ cursor: 'pointer' }} class="actions">
                                                    <img style={{ width: '15px' }} src='https://maxcdn.icons8.com/Share/icon/Dusk_Wired/Editing/edit1600.png' />
                                                </td>
                                            </tr>

                                            <tr>

                                                <td class="pr-0 pl-4">
                                                    <img class="profile-img img-sm" src={profile}
                                                        alt="profile image" />
                                                </td>
                                                <td class="pl-md-0">
                                                    <small class="text-black font-weight-medium d-block">Barbara Curtis</small>
                                                    <span class="text-gray">
                                                        <span class="status-indicator rounded-indicator small bg-primary"></span>Activated
                                                    </span>
                                                </td>

                                                <td class="text-success">563 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success">700 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success"> 86 &nbsp;  15.67%  <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-success"> 86 &nbsp; 15.67% <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-danger">86 &nbsp; 23.05% <i class="mdi mdi-arrow-down"></i> </td>
                                                <td>Jar 23, 2019 </td>
                                                <td style={{ cursor: 'pointer' }} class="actions">
                                                    <img style={{ width: '15px' }} src='https://maxcdn.icons8.com/Share/icon/Dusk_Wired/Editing/edit1600.png' />
                                                </td>
                                            </tr>

                                            <tr>

                                                <td class="pr-0 pl-4">
                                                    <img class="profile-img img-sm" src={profile}
                                                        alt="profile image" />
                                                </td>
                                                <td class="pl-md-0">
                                                    <small class="text-black font-weight-medium d-block">Barbara Curtis</small>
                                                    <span class="text-gray">
                                                        <span class="status-indicator rounded-indicator small bg-primary"></span>Activated
                                                    </span>
                                                </td>

                                                <td class="text-success">563 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success">700 &nbsp;  15.67% <i class="mdi mdi-arrow-up"></i></td>
                                                <td class="text-success"> 86 &nbsp;  15.67%  <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-success"> 86 &nbsp; 15.67% <i class="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td class="text-danger">86 &nbsp; 23.05% <i class="mdi mdi-arrow-down"></i> </td>
                                                <td>Jar 23, 2019 </td>
                                                <td style={{ cursor: 'pointer' }} class="actions">
                                                    <img style={{ width: '15px' }} src='https://maxcdn.icons8.com/Share/icon/Dusk_Wired/Editing/edit1600.png' />
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



function mapStateToProps(state) {

    return {
        profile: state.data.profile.data,
        msg: state.data.registererror
    }
}


export default connect(mapStateToProps, null)(Admindashboard)