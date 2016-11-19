/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { selectApp, Actions } from './ducks'
import { connect } from 'react-redux';
import Navigation from './components/Navigation'
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentDidMount(){
    const { code } = this.props.location.query;
    const { token } = this.props;
    const { user } = localStorage.getItem("user");
    console.log(this.props.location)
    if(code !== undefined &&
      token == false &&
      (user == undefined || user == "")) {
      this.props.requestToken(code);
    }
  }

  logoutInstagram() {

    this.props.logout();
  }

  render() {
    return (
      <div>
        <Navigation
          login={this.props.login}
          logout={this.props.logout}
          user={this.props.user}
        />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = selectApp();

function mapDispatchToProps(dispatch) {
  return {
    requestToken: (code) => {
      dispatch(Actions.REQUEST_TOKEN(code));
    },
    login: () => {
      dispatch(Actions.LOGIN());
    },
    logout: () => {
      dispatch(Actions.LOGOUT());
    },
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
