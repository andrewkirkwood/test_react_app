import React from 'react'

function Contact({ contact }){
  return (
    <li>
      <h5> {contact.name} </h5> <br></br>
      <h5> {contact.phoneNumber} </h5>
    </li>
  )
}

export default Contact