import React, { useState } from 'react';
import classes from  "./Ask_Me.module.css";
import stateList from "./Ask_Me.json";
import { Askmeapi } from '../../API/Apicall';

const AskMe = () => {
  const [error, setError] = useState(false);
  const [input, setInput] = useState({
    email:"",
    name:"",
    topic:"",
    question:""
  })
 const submitData = async (e) =>{
    e.preventDefault()
    if(!input.email || !input.name || !input.topic || !input.question){
        setError(true);
        return false;
    }
    let formdata = new FormData()
    formdata.append("name",input.name)
    formdata.append("email",input.email)
    formdata.append("topic", input.topic)
    formdata.append("question", input.question)
    
    let config = {
      'Content-type':'application/json'
    }

    const response = await Askmeapi(formdata, config);
    alert(response)
 }
  const inputValue = (e)=>{
    const{name, value} = e.target
    setInput({...input,[name]:value})
  }
   
  
  
  return (
    <>
      <div className={classes.ask_me_main_panel}>
        <div className={classes.ask_me_heading}>
          <h2>Ask Me</h2>
        </div>
        <div>
          <form>
            <div className={classes.label_section_div}>
              <label>From: <input className={classes.ask_me_input} placeholder='abc@gmail.com' type='email' name='email' value={input.email}  onChange={inputValue}></input></label>
            </div>
            {error && !input.email &&<p className={classes.error}>Enter email !!!</p> }

            <div className={classes.label_section_div}>
              <label>Name: <input className={classes.ask_me_input} placeholder='Enter your name' type='text' name='name' value={input.name}  onChange={inputValue}></input></label>
            </div>
            {error && !input.name &&<p className={classes.error}>Enter name!!!</p> }

            <div className={classes.label_section_div}>

              <label>State:
                <select name='state' id='state'>   
                  {stateList.map(stateName => {
                    return (
                      <option key={stateName.value}  value={stateName.value} onChange={inputValue}>{stateName.state}</option>
                    )
                  })}
                </select>
              </label>
            </div>
            <div className={classes.label_section_div}>
              <label>Topic: <input className={classes.ask_me_input} placeholder='About Topic' type='text' name='topic' value={input.topic}  onChange={inputValue}></input></label>
            </div>
            {error && !input.topic &&<p className={classes.error}>Enter topic!!!</p> }

            <div className={classes.label_section_div}>
              <textarea type='text' placeholder='your question...' name='question' value={input.question}  onChange={inputValue} ></textarea>
            </div>
            {error && !input.question &&<p className={classes.error}>Enter question!!!</p> }

            <div className={classes.submit_btn_div}>
            <button type='submit' className='submit_btn_ask_me' onClick={submitData}> Submit </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default AskMe;
