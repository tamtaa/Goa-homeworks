const user = {
    name: "Tamta",
    greet: function () {
        console.log("Hello, " + this.name + "!");
    }
};

const car = {
    brand: "BMW",
    speed: 0,

    drive: function () {
        this.speed += 50;
        console.log(`Car is driving at ${this.speed} km/h`);
    },

    stop: function () {
        this.speed = 0;
        console.log("Car stopped");
    }
};

// გამოძახება
user.greet();

car.drive();
car.drive();
car.stop();
