var app = angular.module("sampleApp",[]);
(function(){


  app.controller('mainCtrl',function($scope,myService){
    $scope.title = "Sample";
    myService.getData().then(function(data){
      $scope.data = data;
    });
  });
})();
