'use strict';

/**
 * @ngdoc function
 * @name todoAppLocalize.controller:LocaleCtrl
 * @description
 * # LocaleCtrl
 * Controller of the todoAppLocalize
 */
angular.module('todoAppLocalize')
        .controller('LocaleCtrl', function ($scope, $rootScope, $stateParams, $state, $translate, Setup) {
            
            $scope.changeRoute = function(locale)
            {
                $state.go($state.current.name, {locale: locale});
            };
            
            $scope.checkLocality = function (newLocale) {
                
                var routeShouldChange = false;
                var locale = null;

                if (newLocale === '@')
                {
                    //storageKey()
                    locale = $translate.storage().get();
                    routeShouldChange = true;
                }
                else
                {
                    locale = newLocale;
                }

                if (locale === undefined || locale === null || locale === '')
                {
                    locale = Setup.language;
                }
                                
                if ($rootScope.locale === locale)
                {
                    if (routeShouldChange)
                    {
                        $scope.changeRoute($rootScope.locale);
                    }
                    return false;
                }

                $rootScope.locale = locale;
                $translate.use($rootScope.locale).then(function(){
                    
                    if ($rootScope.locale === 'fa')
                    {
                                                                        
                        $rootScope.config.dir = 'rtl';
                        $rootScope.config.font = 'fa';
                    }
                    else
                    {
                        $rootScope.config.dir = 'ltr';
                        $rootScope.config.font = null;
                    }
                    
                    if (routeShouldChange)
                    {
                        $scope.changeRoute($rootScope.locale);
                    }
                });
            };
            
            /*$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
             $scope.checkLocality(toParams.locale);
             });*/
            $scope.checkLocality($stateParams.locale);
        });
