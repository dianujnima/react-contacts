import React, { Component } from 'react';
import {Consumer} from './../../Context';
import TextInputField from './../partials/TextInputField';
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount(){
        const {id} = this.props.match.params;
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    onAddContactSubmit = async (dispatch, e) => {
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
        
        const editedContact = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
        };
        const { id } = this.props.match.params;
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, editedContact);
        dispatch({
            type: 'UPDATE_CONTACT',
            payload: res.data
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
                <h2 className="display-4"><span className="text-success">Update</span> Contact!</h2>
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
                                            label="Phone" 
                                            name="phone" 
                                            value={phone}
                                            type="phone"
                                            placeholder="Enter Phone" 
                                            onchange={this.onChange}
                                            error={errors.phone}
                                            required
                                        />
                                        <button className="btn btn-block btn-success">Update Contact</button>
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

export default EditContact