//define([], function () {
//});

var datautil = function () {
    return {
        getDateMin: function (string) {
            string = string.replace(/-/g, "/");
            string += " 00:00:00.000";
            return string;
        },
        getDateMax: function (string) {
            string = string.replace(/-/g, "/");
            string += " 23:59:59.999";
            return string;
        }
    }
};
