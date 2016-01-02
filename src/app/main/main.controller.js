(function() {
  'use strict';

  angular
    .module('mainazarov')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.name = "Chyngyz";

    vm.resources = [
      'assets/media/mainazarov.webm',
      '*.ogv',
      'assets/media/mainazarov.mp4'
    ];
    vm.poster = 'assets/images/slide-3.jpg';
    vm.fullScreen = true;
    vm.muted = true;
    vm.zIndex = '-1';
    vm.playInfo = {};
    vm.pausePlay = true;
  }
})();
