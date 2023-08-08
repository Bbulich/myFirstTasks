let john = {
    name: 'John',
    age:22,
    pet: 'cat'
};

let ann = {
    name: 'Ann',
    age: 21,
    pet: 'John'
};

function message(person){
    console.log(`Меня зовут ${person.name}, мне ${person.age}, у меня есть питомец ${person.pet}`);
}

function incrementAge(person){
    person.age++;
}


for (var key in john) {
    if (john.hasOwnProperty(key)) {
        console.log(key + " -> " + john[key]);
    }
}

incrementAge(ann);
message(ann);