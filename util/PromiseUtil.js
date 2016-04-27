var q = require("q");

function toPromise(method) {
    return function () {
        var deferred = q.defer();
        var args = Array.prototype.slice.call(arguments, 0);
        args.push(deferred.callback());
        method.apply(null, args);
        return deferred.promise;
    }
}