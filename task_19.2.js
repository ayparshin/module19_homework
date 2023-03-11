const obj = {
    name: "John",
    surname: "Cena",
    age: 40,
    profession: "actor",
}

function searchKey (key, object){
    return (key in object);
}

// let testVariable = searchKey ("name", obj);
// console.log (testVariable);