angular.module('MainCtrl', []).controller('MainController', function($scope,$http,Msg) {

     Msg.get()
            .success(function(data) {
                $scope.msgs = data;
            });
    $scope.createMsg = function() {

                Msg.create($scope.formData)

                
                    .success(function(data) {
                        $scope.formData = {}; 
                        $scope.msgs = data; 
                    });
           
        };
            /*
   $scope.createMsg = function() { 
    	//Msg.create($scope.formData)
      $http.post('/messages',formData);
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.msgs= data;
                console.log(data);
            })  
            .error(function(data) {
                console.log('Error: ' + data);
            });
        

}*/
});
