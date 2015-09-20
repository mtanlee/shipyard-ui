/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';

import styles from '../../../semantic/dist/semantic.css'

@withStyles(styles)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Log In';
    this.context.onSetTitle(title);
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="eight wide column">
          <h2 className="ui header">shipyard</h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="username" placeholder="Username"></input>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="text" name="password" placeholder="Password"></input>
                </div>
              </div>
              <div className="ui fluid large blue submit button">Login </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default LoginPage;
