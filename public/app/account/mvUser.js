/**
 * Created by awippl on 3/20/2016.
 */

angular.module('app').factory('mvUser', function($resource) {
    var UserResource = $resource('/api/users/:id', {_id: "@id"});

    UserResource.prototype.isAdmin = function() {
        return this.roles && this.roles.indexOf('admin') > -1;
    }

    return UserResource;
});