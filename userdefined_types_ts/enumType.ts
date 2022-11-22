// Enum - store constants , dublicate value is not allowed here
// enum-type:: numeric, string, hetergenous


//numeric enum ...................

enum RequestTypeOne{

    readData,
    saveData,
    deleteData,
}
enum RequestTypeOneOth{

    readData,
    saveData=3,
    deleteData,
}
//string enum ............
enum RequestTypeTwo{
    readData="READ-DATA",
    saveData="SAVE-DATA",
    deleteData="DELETE-DATA",
}
//hetergenous enum .................
enum RequestTypeThree{
    readData="READ-DATA",
    saveData="SAVE-DATA",
    deleteData="DELETE-DATA",
    id = 101,
}

console.log(RequestTypeOne);
console.log(RequestTypeOneOth);
console.log(RequestTypeTwo);
console.log(RequestTypeThree);