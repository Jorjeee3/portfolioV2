import React, { useState } from 'react'
import axios from 'axios';
import Bubble from '../../components/bubble/Bubble';
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import './contacts.scss'

function Contacts() {
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [ toShortCompany, setToShortCompany ] = useState(false)
  const [ companyAbsent, setCompanyAbsent ] = useState(false)
  const [ emailAbsent, setEmailAbsent ] = useState(false)
  
  const [ activeAlert, setActiveAlert ] = useState(false)
  const [ activeError, setActiveError ] = useState(false)

  let [countMessage, getCountMessage] = useState(0);

  let tg = {
    token: "6150766760:AAEfFiHNDUlKFHwjS4PED6xUpMX-u1UvvSI",
    chat_ID: "-1001883598247" 
  }

  function sendMessage() {
      const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;

      let newMessage = `<b>MESSAGE FROM PORTFOLIO</b>
      <b>Company name: ${company}</b>
      <b>Company email: ${email}</b>
      <b>Message: ${message ? message : 'message is absent'}</b>`

      axios.post(url, {
        chat_id: tg.chat_ID, 
        parse_mode: 'html',
        token: tg.token,
        text: newMessage,
      })
    }

  const keyhandler = e => {
    getCountMessage(e.target.value.length);
  };

  function checkTheFormData(e) {
    e.preventDefault()

    if (company === '' && email === '') {
      setCompanyAbsent(true)
      setEmailAbsent(true)

      setActiveError(true)

      setTimeout(() => {
        setActiveError(false)
      }, 3000)
     
    } else if (company === '' || email === '') {
      setCompanyAbsent(!company)
      setEmailAbsent(!email)

      setActiveError(true)

      setTimeout(() => {
        setActiveError(false)
      }, 3000)

    } else if (company.length < 4) {
      setToShortCompany(!toShortCompany)

      setActiveError(true)

      setTimeout(() => {
        setActiveError(false)
      }, 3000)

    } else {
      sendMessage()

      setCompanyAbsent(false)
      setEmailAbsent(false)
      setToShortCompany(false)

      setCompany('')
      setEmail('')
      setMessage('')

      setActiveAlert(true)

      setTimeout(() => {
        setActiveAlert(false)
      }, 3000)
    }
  }

  return (
    <section className='contacts-section'>
      <h2 className='portfolio-subtitle'>Contacts</h2>
      <form 
        action="" 
        className='portfolio-form' 
      >
        <div className="form-inputs-wrapper">
          <label htmlFor="company" className='form-label'>
            <span className='form-input-title'>Company</span>
            <input 
              type="text" 
              name="company"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className='form-input'
            />
            {toShortCompany && <p className='input-alert' >Sorry, but the company name is very short</p>}
            {companyAbsent && <p className='input-alert' >Please, fill in the field with the company name</p>}
          </label>

          <label htmlFor="email" className='form-label'>
            <span className='form-input-title'>Email</span>
            <input 
              type="email" 
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='form-input'
            />
            {emailAbsent && <p className='input-alert' >Please, fill in the field with the company email</p>}
          </label>
        </div>

        <div className="form-textarea-wrapper">
          <label htmlFor="message" className='form-label'>
            <span className='form-input-title'>Message</span>
            <textarea
              name="message"
              id="message"
              className='form-message'
              cols="30"rows="10"
              maxLength="430"
              value={message}
              onKeyUp={e => keyhandler(e)}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className='form-textarea-count'>{countMessage}/430</div>
          </label>
        </div>
        <button className='form-button' onClick={checkTheFormData} >submit</button>
      </form>

      <div className={`alert success-alert ${activeAlert && 'active'}`}>
        <div className='alert-data'>
          <TiTick /> <span>has been sent</span>
        </div>  
        <div className='progress-line'></div>
      </div>

      <div className={`alert error-alert ${activeError && 'active'}`}>
        <div className='alert-data'>
          <ImCross /> <span>incorrect data</span>
        </div>
        <div className='progress-line'></div>
      </div>

      <Bubble />
    </section>
  )
}

export default Contacts