import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Adminkauser(props) {
    const [state, setstate] = useState(props.data ? props.data : '');

    useEffect(() => {
        //   axios.get('http://localhost:4000/alluser').then(e => {

        //       setstate(e.data.data)
        //   })

        a()


    }, [])





    const getsingledata = (id) => {

        axios({
            method: "GET",
            withCredentials: true,
            url: 'http://localhost:4000/getsingleuser/sdfghjhgfdsdfg',
        })




        // if (id) {
        //     axios.get(`http://localhost:4000/getsingleuser/sdfghjhgfdsdfg`).then(r => console.log(r))
        // }
    }



    function a() {
        getsingledata('cfvgbhngbvfcx')
    }

    return (
        <div>
            hello
        </div>
    )
}
