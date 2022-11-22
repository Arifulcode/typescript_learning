//User defined type : array, enum , classes, interface 

let personId: (number | string | boolean);


personId = "1001";
personId = 1001;
personId = true;

function displayPersonInfo(personId){
    console.log(personId);
}

displayPersonInfo(1);
displayPersonInfo("100");
// displayPersonInfo("25.500");
displayPersonInfo(true);