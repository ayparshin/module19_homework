// function Electic (){
//     this.voltage = 220,
//     this.time = 720
// };
  
// function Consumption(power, color, name){
//     this.power = power,
//     this.color = color,
//     this.name = name
// }

// Consumption.prototype = new Electic()

// Electic.prototype.getConsumption = function () {
//     console.log("Energy consumption per month is " + Math.round(this.power / 1000 * this.time) + "kWh")
// }

// const computer = new Consumption(350, 'silver', 'computer')
// const deskLamp = new Consumption(8, 'silver', 'deskLamp')

// console.log(computer)
// computer.getConsumption()

//______________________________________________________________________


class Consumption {
    constructor() {
        this.voltage = 220;
        this.time = 720;
    }
}

class Electic extends Consumption {
    constructor(power, color, name, time){
        super(time);
        this.power = power;
        this.color = color;
        this.name = name;
    }

    getConsumption(){
        console.log("Energy consumption per month is " + Math.round(this.power / 1000 * this.time) + "kWh")   
    }
}

const computer = new Electic(350, 'black', 'computer')
const deskLamp = new Electic(8, 'silver', 'deskLamp')

console.log(computer)
computer.getConsumption()