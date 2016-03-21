/**
 * Created by awippl on 3/20/2016.
 */
angular.module('app').controller('mvUserListCtrl', function($scope, mvUser) {
    $scope.users = mvUser.query();
});