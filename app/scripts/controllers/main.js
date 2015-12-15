'use strict';

/**
 * @ngdoc function
 * @name todoAppLocalize.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAppLocalize
 */
angular.module('todoAppLocalize')
        .controller('MainCtrl', function ($scope, $rootScope, $timeout) {

            $scope.todo = {
                summary: null,
                title: null
            };
            
            $scope.editMode = false;
            $scope.todoList = [];
            $scope.modalTitle = null;
            $scope.editItemIndex = false;

            $scope.newTodo = function () {
                
                $scope.$broadcast('show-errors-reset');
                
                $scope.modalTitle = 'NEW_TODO';
                
                $scope.todo = {
                    summary: null,
                    title: null
                };

                $('#todoModal').modal('show');
                $scope.editItemIndex = false;

            };
            
            $scope.saveTodo = function(){
                
                $scope.$broadcast('show-errors-check-validity');
                if ($scope.todoForm.$invalid) {
                    return false;
                }
                
                if($scope.editItemIndex !== false)
                {
                    $scope.todoList[$scope.editItemIndex] = $scope.todo;
                }
                else
                {
                    $scope.todoList.push($scope.todo);
                }
                
                $scope.todo = {
                    summary: null,
                    title: null
                };
                
                $('#todoModal').modal('hide');
                
            };
            
            $scope.deleteTodo = function(index){
                
                //var clickedItem = $scope.todoList[index];
                
                $scope.todoList.splice(index, 1);
            };
            
            $scope.editTodo = function(index){
                
                $scope.editItemIndex = index;
                $scope.todo = {
                    summary: $scope.todoList[index].summary,
                    title: $scope.todoList[index].title
                };
                $('#todoModal').modal('show');
                
            };
            
        });
