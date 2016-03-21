/**
 * Created by awippl on 3/20/2016.
 */
angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function(mvToastr) {
    return {
        notify: function(msg) {
            mvToastr.success(msg);
            console.log(msg);
        }
    }
})