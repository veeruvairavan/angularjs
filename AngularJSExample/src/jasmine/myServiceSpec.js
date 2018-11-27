describe('myNameSpace.services', function() {
  describe('MyService', function() {
    var createService;

    beforeEach(module('sampleApp'));

    beforeEach(inject(function($injector) {
      createService = function() {
        return $injector.get('myService');
      }
    }));

    it('get one', function() {
      var service = createService();
      expect(service.getOne()).toBe("1");
    });

    it('$q test', function(){

    });
  });
});
