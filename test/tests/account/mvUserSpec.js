/**
 * Created by awippl on 3/21/2016.
 */
describe('mvUser', function() {
    beforeEach(module('app'));

    describe('isAdmin', function() {
        it('should return false if the roles array does not have an admin entry', inject(function(mvUser) {
            var user = new User();
            user.roles = ['not admin'];
            expect(user.isAdmin()).to.be.falsey;
        }))
    })
})