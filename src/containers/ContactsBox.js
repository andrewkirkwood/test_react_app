import React, { Component } from 'react'
import SavedContactsList from '../components/SavedContactsList'
import NewContactForm from '../components/NewContactForm'

class ContactsBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
    this.addNewContact = this.addNewContact.bind(this);
  }

  componentDidMount() {
    this.fetchAllApprovedContacts()
  }

  fetchAllApprovedContacts() {
    fetch("http://localhost:8000")
    .then(res => res.json())
    .then(fetchedContacts => {
      this.setState({contacts: fetchedContacts})
    })
    .catch(err => console.error)
  }

  addNewContact = (newContactName, newContactPhoneNumber) => {
    const newContactToBeAdded = { name: newContactName, phoneNumber: newContactPhoneNumber }
    const contactsUpdated = [...this.state.contacts, newContactToBeAdded]

    fetch("http://localhost:8000", {
      method: 'POST',
      body: JSON.stringify(newContactToBeAdded),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => this.setState({ contacts: contactsUpdated })
    )
  }

  render() {
    return (
      <article>
        {/* <h2> Contacts Box </h2> */}
        <NewContactForm onNewContactSubmit={this.addNewContact} />
        <SavedContactsList contacts={this.state.contacts} />
      </article>
    )
  }
}

export default ContactsBox

