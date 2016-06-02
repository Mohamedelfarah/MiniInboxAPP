angular.module('ProfileCtrl',[]).controller('ProfileController', function($scope,user,Msg) {

    user.get()
            .success(function(data) {
                $scope.user = data;
            });

});