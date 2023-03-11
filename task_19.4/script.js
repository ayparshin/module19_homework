function Electic (){
    this.voltage = 220,
    this.time = 720
};
  
function Consumption(power, color, name){
    this.power = power,
    this.color = color,
    this.name = name
}

Consumption.prototype = new Electic()

Electic.prototype.getConsumption = function () {
    console.log("Energy consumption per month is " + Math.round(this.power / 1000 * this.time) + "kWh")
}

const computer = new Consumption(350, 'black', 'computer')
const deskLamp = new Consumption(8, 'silver', 'deskLamp')

console.log(computer)
computer.getConsumption()
