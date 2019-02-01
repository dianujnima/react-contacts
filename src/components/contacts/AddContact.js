import React, { Component } from 'react';
import {Consumer} from './../../Context';
import TextInputField from './../partials/TextInputField';
import uuid from 'uuid';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    onAddContactSubmit = (dispatch, e) => {
        e.preventDefault();
        // dispatch
        const {name, email, phone} = this.state;

        //check errors
        if(name === ""){
            this.setState({
                errors: {
                    name: "Name is required"
                }
            });
            return;
        }
        
        if(email === ''){
            this.setState({
                errors: {
                    email: "Email is required"
                }
            });
            return;
        }
        
        if(phone === ''){
            this.setState({
                errors: {
                    phone: "Phone is required"
                }
            });
            return;
        }
        
        const newContact = {
            id: uuid(),
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
        };
        dispatch({
            type: 'ADD_CONTACT',
            payload: newContact
        });

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })

        this.props.history.push('/');
    }

    render() {
        const {name, email, phone, errors} = this.state;
        return(
            <React.Fragment>
                <h2 className="display-4"><span className="text-success">Add</span> Contact!</h2>
                <hr className="my-4" />
                <Consumer>
                    {value => {
                        const {dispatch} = value;
                        return (
                            <div className="card mb-4">
                                <div className="card-header">Add Contact</div>
                                <div className="card-body">
                                    <form onSubmit={this.onAddContactSubmit.bind(this, dispatch)}>
                                        <TextInputField 
                                            label="Name" 
                                            name="name" 
                                            value={name} 
                                            placeholder="Enter Name" 
                                            onchange={this.onChange}
                                            error={errors.name}
                                            required
                                        />
                                        <TextInputField 
                                            label="Email" 
                                            name="email" 
                                            value={email}
                                            type="email"
                                            placeholder="Enter Email" 
                                            onchange={this.onChange}
                                            error={errors.email}
                                            required
                                        />
                                        <TextInputField 
                                            label="phone" 
                                            name="phone" 
                                            value={phone}
                                            type="phone"
                                            placeholder="Enter Phone" 
                                            onchange={this.onChange}
                                            error={errors.phone}
                                            required
                                        />
                                        <button className="btn btn-block btn-success">Add Contact</button>
                                    </form>
                                </div>
                            </div>
                        )
                    }}
                </Consumer>
            </React.Fragment>
        )
    }
}

export default AddContact