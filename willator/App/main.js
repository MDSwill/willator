// In the main.js file, create a controller

(function () {
    'use strict';

    angular
        .module('app')
        // define controller registered with the app module
        .controller('Main', main);
    
    // is the controller itself
    function main() { // IIFE (immediately-invoked function expression)
        var vm = this; // the properties and methods that you apply to scope are defined on this
        vm.food = 'pizza';
    }
})();