(function() {
  'use strict';

  angular
    .module('mainazarov')
    .directive('headerNav', headerNav);

  /** @ngInject */
  function headerNav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;
    }
  }

})();
