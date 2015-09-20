import angular from 'angular';
import uiRouter from 'angular-ui-router';
import containersComponent from './containers.component';

let containersModule = angular.module('containers', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('containers', {
      url: '/',
      template: '<containers></containers>'
    });
})

.directive('containers', containersComponent);

export default containersModule;
