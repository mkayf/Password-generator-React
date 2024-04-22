import React, { useState } from 'react'
import {SC,UC,LC,NC} from './Passchars'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [specialChar, setSpecialChar] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [passLength, setPassLength] = useState(10);
  let [password, setPassword] = useState('');

  const generatePassword = () => { 
    let charSet = '';
    let finalPassword = '';
    if(uppercase || lowercase || specialChar || numbers){
      if(uppercase){charSet += UC};
      if(lowercase){charSet += LC};
      if(specialChar){charSet += SC};
      if(numbers){charSet += NC};
      
      for(let i = 0; i < passLength; i++){
        finalPassword += charSet.charAt(Math.floor(Math.random() * charSet.length))
      }
      setPassword(finalPassword);
    }
    else{
      toast.error('Please select atleast one property!')
    }
  }
  
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    toast.success('Password copied!')
  }

  return (
    <div className='main-div'>
      <ToastContainer/>
      <div className="password-box">
        <h1>Password Generator</h1>
        <div className="pass-input-div">
          <input type="text" className='pass-input' value={password} readOnly/> <button className='copy-btn' onClick={copyPassword}>Copy</button>
        </div>
        <div className="pass-props">
          <label htmlFor="pass-length">Password length</label> <input type="number" value={passLength} min={8} max={20} id='pass-length' onChange={(event)=>setPassLength(event.target.value)} />
        </div>
        <div className="pass-props">
          <label htmlFor="uppercase">Include uppercase letters</label> <input type="checkbox" id='uppercase' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
        </div>
        <div className="pass-props">
          <label htmlFor="lowercase">Include lowercase letters</label> <input type="checkbox" id='lowercase' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
        </div>
        <div className="pass-props">
          <label htmlFor="numbers">Include numbers</label> <input type="checkbox" id='pass-length' checked={numbers} onChange={()=>setNumbers(!numbers)}/>
        </div>
        <div className="pass-props">
          <label htmlFor="special-char">Include special characters</label> <input type="checkbox" id='special-char' checked={specialChar} onChange={()=>setSpecialChar(!specialChar)}/>
        </div>
        <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
  )
}

export default App