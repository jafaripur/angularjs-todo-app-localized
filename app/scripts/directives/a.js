'use strict';

/**
 * @ngdoc directive
 * @name todoAppLocalize.directive:a
 * @description
 * # a
 */
angular.module('todoAppLocalize')
        .directive('a', function () {
            return {
                restrict: 'E',
                link: function (scope, elem, attrs) {
                    if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                        elem.on('click', function (e) {
                            e.preventDefault(); // prevent link click for above criteria
                        });
                    }
                }
            };
        });
