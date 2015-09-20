import angular from 'angular';
import Containers from './containers/containers';

let componentModule = angular.module('app.components', [
  Containers.name,
]);

export default componentModule;
