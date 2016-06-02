angular.module('MsgService', []).factory('Msg', ['$http', function($http) {

    return {
        
        get : function() {
            return $http.get('/messages');
        },
        get : function() {
            return $http.get('/login');
        },


                
        create : function(formData) {
            return $http.post('/messages',formData);
        }

        
    }       

}]);