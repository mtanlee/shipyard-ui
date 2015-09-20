import template from './containers.html';
import controller from './containers.controller';

let containersComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default containersComponent;
