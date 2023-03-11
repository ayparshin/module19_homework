const obj = {
    name: "John",
    surname: "Cena",
    age: 40,
    profession: "actor",
}

function consoleKey(object){
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            console.log(key);
        }
    }
}

consoleKey(obj);