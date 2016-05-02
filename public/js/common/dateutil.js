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

function dateString(string){
    string = string.replace(/-/g, "/");
    string = string.replace("T"," ");
    string = string.replace(".000Z","");
    string = string.replace(".999Z"," ");
    return string;
}
