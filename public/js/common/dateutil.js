define([], function () {
    return {
        getDateMin: function (string) {
            string = string.replace(/-/g, "/");
            string += " 00:00:00.000";
            return new Date(string);
        },
        getDateMax: function (string) {
            string = string.replace(/-/g, "/");
            string += " 23:59:59.999";
            return new Date(string);
        }
    }
});