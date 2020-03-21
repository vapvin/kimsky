class Human {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    say = () => {
        console.log("Hi", this.name);
    }

    printAge(){
        console.log(age);
    }
}


const sky = new Human("김하늘", 27, "여성");

sky.say();