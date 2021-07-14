import React, { useEffect, useState, Fragment } from 'react'
import { connect } from "react-redux";
import { sendpoint } from "../../actions/index"
import './quiz.css';

function Quiz(props) {


    const [timeralert, settimeralert] = useState(props.state.data.profile.msg);
    const [point, setpoint] = useState(0)
    const [queslist, setqueslist] = useState('');
    const [type, settype] = useState('html');


    var sendresult = () => {
        if (point > -1) {

            props.sendpoint(point, type)
            alert('Submitted SuccessFully')
        } else if (!type) {
            alert('Select Enyone Test Technology')
        } else {

            alert('Done , I know you didnt give answer correct or did not answering')
        }



    }


    var timeer = 1;

    useEffect(() => {
        if (props.list) {

            if (type === 'html' && props.profile.htmlquiz.status) {
                var ht = props.list.filter((e) => e.type === 'html')
                setqueslist(ht)
            } else {

                setqueslist('')
            }
            if (type === 'js' && props.profile.jsquiz.status) {
                var jst = props.list.filter((e) => e.type === 'js')
                setqueslist(jst)
            }
            if (type === 'cplusplus' && props.profile.cplusplusquiz.status) {
                var ct = props.list.filter((e) => e.type === 'cplusplus')
                setqueslist(ct)
            }
            if (type === 'python' && props.profile.pythonquiz.status) {
                var pt = props.list.filter((e) => e.type === 'python')
                setqueslist(pt)
            }
        }




    }, [props, type, props.profile])



    const checkanswer = (result, data) => {

        if (data) {

            let wronganswer = 0;
            var a = data.question.options[result.target.id - 1];
            if (a === data.answer) {
                setpoint(point + 10)
            } else {
                setpoint(point + wronganswer)
            }
        }
    }





    return (
        <div>
            <h6 className='text-primary h6'>{type} is selected </h6>
            <div class="d-flex align-items-center pt-3">

                <div className="flex justify-evenly">


                    <div className='flex-wrap'>
                        <button onClick={() => settype('html')} class={` ${type === 'html' ? 'bg-indigo-500 text-white' : 'text-black'} w-40  mr-4  hover:text-white hover:bg-indigo-500  font-semibold py-2 px-4 border border-gray-400 rounded`}>Html Test</button>

                        <button onClick={() => settype('js')} class={` ${type === 'js' ? 'bg-indigo-500 text-white' : 'text-black'} w-40  mr-4  hover:text-white hover:bg-indigo-500  font-semibold py-2 px-4 border border-gray-400 rounded`}>JavaScript Test</button>
                        <button onClick={() => settype('cplusplus')} class={` ${type === 'cplusplus' ? 'bg-indigo-500 text-white' : 'text-black'} w-40  mr-4  hover:text-white hover:bg-indigo-500  font-semibold py-2 px-4 border border-gray-400 rounded`}>C++ Test</button>
                        <button onClick={() => settype('python')} class={` ${type === 'python' ? 'bg-indigo-500 text-white' : 'text-black'} w-40  mr-4  hover:text-white hover:bg-indigo-500  font-semibold py-2 px-4 border border-gray-400 rounded`}>Python Test</button>

                    </div>



                </div>
                <div class="ml-auto mr-sm-5"> <button onClick={() => sendresult()} class="btn btn-success">Submit</button> </div>

            </div>

            {queslist ? <> {queslist.map((data, index) => {
                return (<div class="bg py-3 px-md-0 px-4 my-1 my-3">
                    <div class="question ml-sm-5 pl-sm-5 pt-2">
                        <div class="py-2" style={{ fontFamily: 'Roboto' }}><b>Q.{index + 1} {data.question.ques1}</b></div>
                        <div style={{ fontFamily: 'Roboto' }} class="ml-md-3 ml-sm-3 pt-sm-0 pt-3 mt-3" id="options"> <label class="options">{data.question.options[0]} <input type="radio" id='1' name={`radio${index}`} onChange={(e) => checkanswer(e, data)} /> <span class="checkmark"></span> </label> <label class="options">  {data.question.options[1]}  <input type="radio" name={`radio${index}`} id='2' onChange={(e) => checkanswer(e, data)} /> <span class="checkmark"></span> </label> <label class="options">  {data.question.options[2]} <input type="radio" name={`radio${index}`} id='3' onChange={(e) => checkanswer(e, data)} /> <span class="checkmark"></span> </label> <label class="options">{data.question.options[3]} <input type="radio" name={`radio${index}`} id='4' onChange={(e) => checkanswer(e, data)} /> <span class="checkmark"></span> </label> </div>
                    </div>

                </div>)
            })}</> : 'No Quiz Found'}

            <div class="d-flex align-items-center pt-3">

                <div class="ml-auto mr-sm-5"> <button onClick={() => sendresult()} class="btn btn-success">Submit</button> </div>
            </div>

        </div>
    )
}


const mapDispatchToProps = ({
    sendpoint: sendpoint
})

function mapStateToProps(state) {



    return {
        alertmsg: state.data.msg,
        profile: state.data.profile.data
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz)