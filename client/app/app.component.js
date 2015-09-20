import template from './app.html';
import '../../semantic/dist/semantic.css';
import './app.css';

let appComponent = () => {
  return {
    template,
    restrict: 'E'
  };
};

export default appComponent;
