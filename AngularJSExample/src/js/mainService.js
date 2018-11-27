
(function(){
  app.service("myService",function($q,$timeout){
    function getData(){
      var deferred = $q.defer();
      var timer = function() {
       deferred.resolve("data loaded");
      }

    //run!!
      $timeout(timer, 3000);
      return deferred.promise;
    }

    function getOne(){
      return "1";
    }
    return{
      getData:getData,
      getOne:getOne
    }
  });
})();
