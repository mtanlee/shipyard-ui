import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar.name,
  User.name
]);

export default commonModule;
