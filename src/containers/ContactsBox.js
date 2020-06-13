import React, {Component} from 'react'
import SavedContactsList from '../components/SavedContactsList'
import NewContactForm from '../components/NewContactForm'
// import './FilmReleaseBox.css'

class ContactsBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: [
        {
          name: "Steve",
          phoneNumber: 890809897
        },
        {
          name: "Jim",
          phoneNumber: 708970707
        }
      ]
    }
    this.addNewContact = this.addNewContact.bind(this);
  }
  
  componentDidMount(){
    console.log(this.state.contacts)
    //fetch from the server all currently approved contacts
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts === prevState.contacts) {
      console.log("contacts updated")
    }
    else {
      return
    }
  }

  addNewContact = (newContactName, newContactPhoneNumber) => {
    const newContactToBeAdded = {name: newContactName, phoneNumber: newContactPhoneNumber}
    const contactsUpdated = [...this.state.contacts, newContactToBeAdded]
    this.setState({contacts: contactsUpdated})
  }

  render(){
    return (
      <article>
        {/* <h2> Contacts Box </h2> */}
        <NewContactForm onNewContactSubmit={this.addNewContact}/>
        <SavedContactsList contacts={this.state.contacts} />
      </article>
    )
  }
}

export default ContactsBox