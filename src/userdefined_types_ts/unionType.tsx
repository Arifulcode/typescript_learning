//User defined type : array, enum , classes, interface 

let hasId: (number | string | boolean);


hasId = "1001";
hasId = 1001;
hasId = true;

function displayPersonInfo(hasId:number|string|boolean){
    console.log(hasId);
}

displayPersonInfo(1);
displayPersonInfo("100");
// displayPersonInfo("25.500");
displayPersonInfo(true);