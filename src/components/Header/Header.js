/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import withStyles from '../../decorators/withStyles';

import styles from '../../../semantic/dist/semantic.css';
import headerStyles from './Header.css';

@withStyles(headerStyles)
@withStyles(styles)
class Header extends Component {

  render() {
    return (
        <div className="ui fixed inverted menu">
            <div href="#" className="header item">
                <span className="Header-logo">shipyard</span>
            </div>
            <a href="/" className="active item">
                <i className="grid layout icon"></i>
                Containers
            </a>
            <a href="/" className="item">
                <i className="disk outline icon"></i>
                Images
            </a>
        </div>
    );
  }

}

export default Header;
