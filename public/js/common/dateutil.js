//define([], function () {
//});

function dateMinString(string) {
    string = string.replace(/-/g, "/");
    string += " 00:00:00.000";
    return string;
}

function dateMaxString(string) {
    string = string.replace(/-/g, "/");
    string += " 23:59:59.999";
    return string;
}
