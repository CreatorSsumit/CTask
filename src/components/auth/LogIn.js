import React, { Component } from 'react';
import registerImage from '../../img/register.png';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { loginuser } from "../../actions/index"

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    panel: 'admin'
  };



  handleSubmit = event => {
    event.preventDefault();
    this.props.loginuser(this.state)

  };
  render() {
    return (

      <section style={{ background: `linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)` }} class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  mb-16 md:mb-0  text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Login yourself to view dashboard </h1>
            <p class="mb-8 leading-relaxed"> Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>

            <div className="flex justify-evenly">
              {/* <button class="w-39 sm:w-40 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Admin</button> */}
              <button onClick={() => this.setState({ panel: 'admin' })} class="w-40  bg-indigo-500 text-white hover:bg-indigo-500 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">Admin Login</button>
              <button onClick={() => this.setState({ panel: 'user' })} class="w-40 hover:text-black text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">User Login</button>
            </div>

            <form onSubmit={this.handleSubmit} class=" w-full  mt-5">
              <div class="relative  md:w-full lg:w-full ">

                <input required id='username' placeholder='Enter Email' onChange={e => this.setState({ username: e.target.value })} type="email" name='username' class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />


                <input required id='password' placeholder='Enter Password' onChange={(e) => this.setState({ password: e.target.value })} type="password" name='password' class="w-full mt-3 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />



              </div>
              <p class="text-sm mt-5 text-gray-500 w-full " style={{ color: '#F87171', fontWeight: 'bold' }}>Create new Account</p>

              <button type='submit' class="w-100  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
            </form>

          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="register" src={registerImage} />
          </div>
        </div>
      </section>


    );
  }
}

const mapDispatchToProps = ({
  loginuser: loginuser
})

function mapStateToProps(state) {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
