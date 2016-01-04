/**
 * Created by Chyngyz on 1/4/2016.
 */
(function() {
    'use strict';

    angular
        .module('mainazarov')
        .directive('audioPlayer', audioPlayer);

    /** @ngInject */
    function audioPlayer() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/audioPlayer/audioPlayer.html',
            scope: {},
            controller: AudioController,
            controllerAs: 'player'
        };

        return directive;

        /** @ngInject */
        function AudioController(ngAudio) {
            var vm = this;
            vm.audio = ngAudio.load('assets/media/bg-audio.mp3');
            vm.audio.volume = 0.15;
            vm.audio.loop = true;
            vm.audio.play();
        }
    }

})();
