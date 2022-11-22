//User defined type : array, enum , classes, interface 

let Id: (number | string | boolean);


Id = "1001";
Id = 1001;
Id = true;

function displayPersonInfo(Id){
    console.log(Id);
}

displayPersonInfo(1);
displayPersonInfo("100");
// displayPersonInfo("25.500");
displayPersonInfo(true);