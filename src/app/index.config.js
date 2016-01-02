(function() {
  'use strict';

  angular
    .module('mainazarov')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
