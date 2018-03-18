import React, { Component } from "react"

class Hand extends Component {
    setName(event) {
        console.log("doing something")
        event.preventDefault()
        const name = {
            first: this.firstName.value,
            last: this.lastName.value
        }
        this.props.insertName(name)
        this.nameForm.reset()
    }
    
    render(){
        return(
            <div>
                <h1>Im the Hand</h1>
                <form ref={(input) => {this.nameForm = input}} onSubmit={(event) => this.setName(event)} action="submit">
                    <label htmlFor="first-name">First Name</label>
                    <input ref={(input) => {this.firstName = input}} type="text"/>
                    <label htmlFor="last-name">Last Name</label>
                    <input ref={(input) => {this.lastName = input}} type="text" />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Hand
