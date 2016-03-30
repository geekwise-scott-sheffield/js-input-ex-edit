var app = angular.module('todoList', []);

app.controller('listCtrlr', [
    "$scope",
    function($scope){

        //$scope.test = 'halp';

        $scope.content = [{
            title: "new items",
            done: false
        }];

        $scope.addContent = function(){
            $scope.content.unshift({
                title: $scope.title,
                done: false
            });
            $scope.title = '';
        }


    }
]);
