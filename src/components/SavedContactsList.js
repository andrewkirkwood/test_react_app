import React, { Fragment, useEffect} from 'react'
import Contact from './Contact'
// import './FilmList.css'

function SavedContactsList({contacts}){

  // useEffect(() => {

  // })
  const contactComponents = contacts.map(contact => {
    return (
      <Contact
      key={contact.phoneNumber}
        contact={contact}
      >
      </Contact>
    )
  })
  return (
    <Fragment>
      <h3> Your approved contacts:</h3>
      <ul className="films-list">
        {contactComponents}
      </ul>
    </Fragment>
  )

}

export default SavedContactsList