import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from './../../Context';

class Contacts extends Component {
    // deleteContact = id => {
    //     const {contacts} = this.state;
    //     const newContacts = contacts.filter(contact => contact.id !== id);
    //     this.setState({
    //         contacts: newContacts
    //     })
    // }
  render() {
        return (
            <Consumer>
                {value => {
                    const {contacts} = value;
                    return(
                        <React.Fragment>
                            <h2 className="display-4"><span className="text-success">All</span> Contacts!</h2>
                            <hr className="my-4" />
                            {contacts.map(contact => (
                                <Contact key={contact.id} contact={contact}/>
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    // const {contacts} = this.state;
    // return (
    //   <React.Fragment>
    //       {contacts.map(contact => (
    //           <Contact key={contact.id} contact={contact} delClickedHandler={this.deleteContact.bind(this,contact.id)}/>
    //       ))}
    //   </React.Fragment>
    // )
  }
}

export default Contacts;