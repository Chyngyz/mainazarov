(function() {
  'use strict';

  angular
    .module('mainazarov')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.name = "Chyngyz";
  }
})();
