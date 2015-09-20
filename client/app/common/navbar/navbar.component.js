import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.css';

let navbarComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default navbarComponent;
