import React, { Component } from 'react';

class AddContact extends Component {

    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    static defaultProps = {
        name: 'Jane Doe',
        email: 'info@janedoe.com',
        phone: '4433322122'
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    onAddContactSubmit = e => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact);
    }

    render() {
        const {name, email, phone} = this.props;
        return (
            <div>
                <div className="card mb-4">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                        <form onSubmit={this.onAddContactSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    onChange={this.onChange}
                                    defaultValue={name}
                                    ref={this.nameInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    onChange={this.onChange}
                                    defaultValue={email}
                                    ref={this.emailInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Enter Phone"
                                    onChange={this.onChange}
                                    defaultValue={phone}
                                    ref={this.phoneInput}
                                />
                            </div>
                            <button className="btn btn-block btn-success">Add Contact</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContact