import React, { useEffect, useState } from 'react'
import './quiz.css';

export default function Html() {


    const [point, setpoint] = useState(0)
    const [queslist, setqueslist] = useState('')


    var list = [

        {
            type: 'html',
            question: {
                ques1: 'which option best describes your job role?',
                options: ['a', 'b', 'c', 'd']
            },

            answer: 'a'
        },

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


    useEffect(() => {
        if (list) {
            var s = list.filter((e) => e.type === 'html')
            setqueslist(s)
        }

        console.log(point)

    }, [point])



    const checkanswer = (result, data) => {

        if (data) {
            var a = data.question.options[result.target.id - 1];
            if (a === data.answer) {
                setpoint(point + 10)
            }
        }
    }


    return (
        <div>


            {queslist ? <> {queslist.map((data, index) => {
                return (<div class="bg py-3 px-md-0 px-4 my-1 my-3">
                    <div class="question ml-sm-5 pl-sm-5 pt-2">
                        <div class="py-2" style={{ fontFamily: 'Roboto' }}><b>Q.{index + 1} {data.question.ques1}</b></div>
                        <div style={{ fontFamily: 'Roboto' }} class="ml-md-3 ml-sm-3 pt-sm-0 pt-3 mt-3" id="options"> <label class="options">{data.question.options[0]} <input type="radio" id='1' name={`radio${index}`} onChange={(e) => checkanswer(e, data)} /> <span class="checkmark"></span> </label> <label class="options">  {data.question.options[1]}  <input type="radio" name={`radio${index}`} id='2' onChange={(e) => checkanswer(e, data)} /> <span class="checkmark"></span> </label> <label class="options">  {data.question.options[2]} <input type="radio" name={`radio${index}`} id='3' onChange={(e) => checkanswer(e, data)} /> <span class="checkmark"></span> </label> <label class="options">{data.question.options[3]} <input type="radio" name={`radio${index}`} id='4' onChange={(e) => checkanswer(e, data)} /> <span class="checkmark"></span> </label> </div>
                    </div>

                </div>)
            })}</> : ''}

            <div class="d-flex align-items-center pt-3">
                <div id="prev"> <button class="btn btn-primary">Previous</button> </div>
                <div class="ml-auto mr-sm-5"> <button class="btn btn-success">Next</button> </div>
            </div>

        </div>
    )
}
