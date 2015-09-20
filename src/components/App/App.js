import React, { PropTypes, Component } from 'react';
import styles from '../../../semantic/dist/semantic.css';
import appStyles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';

@withContext
@withStyles(styles)
@withStyles(appStyles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    return !this.props.error ? (
      <div>
        <Header />
        {this.props.children}
      </div>
    ) : this.props.children;
  }

}

export default App;
