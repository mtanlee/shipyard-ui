/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import connectToStores from '../../utils/connectToStores';
import ContainersStore from '../../stores/ContainersStore';
import withStyles from '../../decorators/withStyles';
import styles from '../../../semantic/dist/semantic.css';

function getState(props) {
    return {
        containers: ContainersStore.get()
    };
}

@connectToStores([ContainersStore], getState)
@withStyles(styles)
class ContainersPage extends Component {
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Containers';
    this.context.onSetTitle(title);
    return (
      <div className='ui main container'>
        <ContainersTable {...this.props}></ContainersTable>
      </div>
    );
  }
}

class ContainersTable extends Component {
    render() {
        return <table className='ui celled striped table'>
            <thead>
                <tr>
                    <th className='collapsing'><i className='health icon'></i></th>
                    <th>Id</th>
                    <th>Node</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Created</th>
                </tr>
            </thead>
            <tbody>
                {this.props.containers.map(function(container) {
                  return <ContainerRow {...container}/>
                })}
            </tbody>
        </table>;
    }
}

class ContainerRow extends Component {
    render() {
        var shortId = this.props.Id.substring(0, 12);
        var healthClass = this.props.Status.indexOf("Up") === 0 ? 'green circle icon' : 'red circle icon';
        var node = this.props.Names[0].split('/')[1];
        var name = this.props.Names[0].split('/')[2];
        return <tr>
                 <td><i className={healthClass}></i></td>
                 <td>{shortId}</td>
                 <td>{node}</td>
                 <td>{name}</td>
                 <td>{this.props.Image}</td>
                 <td>{this.props.Status}</td>
                 <td>{this.props.Created}</td>
               </tr>;
    }
}

export default ContainersPage;
