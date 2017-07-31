import React, { Component } from "react";
import { authenticated } from '../../ducks/reducer';
import { connect } from "react-redux";

import baseURL from '../../baseURL';
import api from "../../api";

class Login extends Component {
  componentDidMount() {
    const { authenticated, user, history } = this.props;
    if ( user === null ) {
      authenticated( history, '/' );
    } else if ( user !== null ) {
      history.push('/');
    }
  }

  render() {
    return (
      <div>
        <a href={ `${baseURL}${api.login}` }>Login/Register</a>
      </div>
    )
  }
}

export default connect( state => state, { authenticated } )( Login );
