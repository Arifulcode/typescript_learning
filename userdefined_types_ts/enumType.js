// Enum - store constants , dublicate value is not allowed here
// enum-type:: numeric, string, hetergenous
//numeric enum ...................
var RequestTypeOne;
(function (RequestTypeOne) {
    RequestTypeOne[RequestTypeOne["readData"] = 0] = "readData";
    RequestTypeOne[RequestTypeOne["saveData"] = 1] = "saveData";
    RequestTypeOne[RequestTypeOne["deleteData"] = 2] = "deleteData";
})(RequestTypeOne || (RequestTypeOne = {}));
var RequestTypeOneOth;
(function (RequestTypeOneOth) {
    RequestTypeOneOth[RequestTypeOneOth["readData"] = 0] = "readData";
    RequestTypeOneOth[RequestTypeOneOth["saveData"] = 3] = "saveData";
    RequestTypeOneOth[RequestTypeOneOth["deleteData"] = 4] = "deleteData";
})(RequestTypeOneOth || (RequestTypeOneOth = {}));
//string enum ............
var RequestTypeTwo;
(function (RequestTypeTwo) {
    RequestTypeTwo["readData"] = "READ-DATA";
    RequestTypeTwo["saveData"] = "SAVE-DATA";
    RequestTypeTwo["deleteData"] = "DELETE-DATA";
})(RequestTypeTwo || (RequestTypeTwo = {}));
//hetergenous enum .................
var RequestTypeThree;
(function (RequestTypeThree) {
    RequestTypeThree["readData"] = "READ-DATA";
    RequestTypeThree["saveData"] = "SAVE-DATA";
    RequestTypeThree["deleteData"] = "DELETE-DATA";
    RequestTypeThree[RequestTypeThree["id"] = 101] = "id";
})(RequestTypeThree || (RequestTypeThree = {}));
console.log(RequestTypeOne);
console.log(RequestTypeOneOth);
console.log(RequestTypeTwo);
console.log(RequestTypeThree);
