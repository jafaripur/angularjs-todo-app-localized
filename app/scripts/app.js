'use strict';

/**
 * @ngdoc overview
 * @name todoAppLocalize
 * @description
 * # todoAppLocalize
 *
 * Main module of the application.
 */
angular
        .module('todoAppLocalize', [
            'ngAnimate',
            'ngAria',
            'ngResource',
            'ngSanitize',
            'ngTouch',
            'ngCookies',
            'ui.router',
            'pascalprecht.translate',
            'anim-in-out'
        ])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $locationProvider.html5Mode(true).hashPrefix('!');

            $urlRouterProvider.otherwise('/@/app/home');
            
            $stateProvider
                    .state('locale', {
                        url: '/{locale:(?:fa|en|@)}',
                        abstract: true,
                        views: {
                            'locale': {
                                templateUrl: "views/locale.html",
                                controller: "LocaleCtrl"
                            }
                        }
                    })
                    .state('locale.app', {
                        url: "/app",
                        views: {
                            'top_menu': {
                                templateUrl: "views/menus/top-menu.html",
                                controller: 'TopMenuCtrl'
                            },
                            'sidebar_menu': {
                                templateUrl: "views/menus/sidebar-menu.html",
                                controller: 'SidebarMenuCtrl'
                            },
                            'footer_menu': {
                                templateUrl: "views/menus/footer-menu.html",
                                controller: 'FooterMenuCtrl'
                            }
                        }
                    })
                    .state('locale.app.main', {
                        url: '/home',
                        views: {
                            'content': {
                                templateUrl: 'views/main.html',
                                controller: 'MainCtrl'
                            }
                        }
                    })
                    .state('locale.app.about', {
                        url: '/about',
                        views: {
                            'content': {
                                templateUrl: 'views/about.html',
                                controller: 'AboutCtrl'
                            }
                        }
                    });
        })
        .config(function ($translateProvider) {
            
            $translateProvider.translations('temp', {});

            $translateProvider.useStaticFilesLoader({
                prefix: '/locales/',
                suffix: '.json'
            });
            
            //$translateProvider.preferredLanguage(Setup.language);

            //$translateProvider.useCookieStorage();
            $translateProvider.useLocalStorage();

            //$translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider.useSanitizeValueStrategy('escapeParameters');
                        
        })
        .run(function ($rootScope, Setup) {

            $rootScope.locale = null;
            $rootScope.config = {
                dir: Setup.direction,
                title: Setup.title,
                font: null
            };

        });