import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
                // contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default:
            return {state}
    }
}

export class Provider extends Component {
    state = {
        contacts: [{
                id: 1,
                name: 'Junaid Amin',
                email: 'junaidameen2009@gmail.com',
                phone: '1234566777'
            },
            {
                id: 2,
                name: 'Dianuj Nima',
                email: 'info@dianujnima.com',
                phone: '12123312312'
            },
            {
                id: 4,
                name: 'John Doe',
                email: 'info@johndoe.com',
                phone: '4235849023'
            },
            {
                id: 5,
                name: 'Jane Doe',
                email: 'info@janedoe.com',
                phone: '4433322122'
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;