import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './../../Context';

class Contact extends Component {
  state = {
    showContact: false
  }
  delContact = (id, dispatch) => {
    // this.props.delClickedHandler();
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    });
  }
  render() {
    const {id, name, email, phone} = this.props.contact;
    const showContact = this.state.showContact;
    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return(
                    <div className="card-body mb-1">
                      <h4>
                        { name }{' '}
                        <i className="link fa fa-sort-down" onClick={
                          () => this.setState({showContact: !this.state.showContact})
                        }></i>
                        <i className="fa fa-times text-danger link" 
                          style={{ float: 'right'  }}
                          onClick={this.delContact.bind(this, id, dispatch)}>
                        </i>
                      </h4>
                      {showContact ? (<ul className="list-group">
                            <li className="list-group-item">Email: { email }</li>
                            <li className="list-group-item">Phone: { phone }</li>
                        </ul>): null}
                    </div>
                )
            }}
        </Consumer>
    )
    // return (
    //   <div className="card-body mb-1">
    //     <h4>
    //       { name }{' '}
    //       <i className="link fa fa-sort-down" onClick={
    //         () => this.setState({showContact: !this.state.showContact})
    //       }></i>
    //       <i className="fa fa-times text-danger link" 
    //         style={{ float: 'right'  }}
    //         onClick={this.delContact}>
    //       </i>
    //     </h4>
    //     {showContact ? (<ul className="list-group">
    //           <li className="list-group-item">Email: { email }</li>
    //           <li className="list-group-item">Phone: { phone }</li>
    //       </ul>): null}
    //   </div>
    // )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // delClickedHandler: PropTypes.func.isRequired
}
export default Contact;