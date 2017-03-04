angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    var auth = "admin:superuser";
    headers = {"Authorization": "Basic " + auth};
    $http.get('http://ec2-54-201-102-10.us-west-2.compute.amazonaws.com:8000/snippets/?format=json', {headers: headers}).
        then(function(response) {
            $scope.lamps = response.data;
        });
});
