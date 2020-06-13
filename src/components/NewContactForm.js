import React, { Component } from 'react'
// import './FilmReleaseBox.css'


import validator from '../../node_modules/validator' 



class NewContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentName: null,
            currentPhoneNumber: null
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    }

    validatePhoneNumber = (number) => {
        const isValidPhoneNumber = validator.isMobilePhone(number)
        return (isValidPhoneNumber)
       }

    handleNameChange = (event) => {
        this.setState({currentName: event.target.value})
    }
    handlePhoneNumberChange = (event) => {
        if (this.validatePhoneNumber(event.target.value) === true){
            console.log("its true")
            
            // console.log(this.validatePhoneNumber(event.target.value))

            // console.log(console.log(this.validatePhoneNumber('react')))
            // console.log(validatePhoneNumber('0641732123')) //=> true
            // )

            // this.setState({currentPhoneNumber: event.target.value})
        }
    }
    handleNewContactSubmit = (event) => {
        event.preventDefault();
        this.props.onNewContactSubmit(this.state.currentName, this.state.currentPhoneNumber)
    }

    render() {
        return (
            <>
                <h2>Add a new contact:</h2>
                <form onSubmit={this.handleNewContactSubmit}>
                    <label > Name </label>
                    <input onChange={this.handleNameChange} required></input>
                    <label>Phone number with 0 at start</label>
                    <input onChange={this.handlePhoneNumberChange} required type="number" ></input>
                    <input type="submit" value="Save contact"></input>
                </form>
            </>
        )
    }
}

export default NewContactForm


//     < div id = "quiz-temperature" >
//         <label htmlFor="temperature" >Temperature:</label>
//         <p>{this.state.temperature}</p>
//         <input onChange={this.handleTemperatureChange} defaultValue={this.state.temperature} type="range" id="temperature" min="0" max="35" />
// { this.renderAnswerSubmitButton("temperature") }
// </div >

// return <button onClick={() => {this.handleScoreSubmit( propertyName)}}>Submit</button>
// 