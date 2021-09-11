import React from 'react'
import './Form.css'

const Form = () => (
  <div className='form-container'>
  <h3 style={{margin: '0.25em', color: '#000000'}}>CATERING REQUEST</h3>
  <p style={{margin: '0.5em', color: '#000000', fontSize: '0.85rem'}}>it's our pleasure to cater your next event.</p>
  <form
  name="contact"
  method="post"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  action='/contact/success'
  >
  <input type="hidden" name="form-name" value="contact" />
  <input
    name='name'
    placeholder='Name'
    maxLength="40"
    required
  />
  <input
    name='email'
    placeholder='Email'
    maxLength="75"
    required
  />
  <input
    name='tel'
    type="tel"
    placeholder='Telephone'
    maxLength="10"
    required
  />
  <textarea
    name='message'
    placeholder='Brief event description'
  />
  <button type='submit'>send</button>
</form>
  </div>
)

export default Form
