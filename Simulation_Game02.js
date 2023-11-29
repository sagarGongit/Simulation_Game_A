function Vehicle(brand,model,speed,fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;

Vehicle.prototype.accelerate = function(){
   this.speed += 10;
   console.log("speed : "+this.speed);
}      
Vehicle.prototype.brake = function(){
 this.speed -= this.speed;
 console.log(this.speed);
}
Vehicle.prototype.refule = function(fuel){
  this.fuel = fuel;
    if(this.fuel>=100){
     console.log("your fuel tank is full !");
    }
    else {
     this.fuel += 10;
     console.log("fuel : "+ (this.fuel)+" litr");
    }
}
Vehicle.prototype.defule = function(){
  this.fuel -= 5;
}
}

function Car(noOfwheels,color,fuelType,brand,model,speed) {
  this.noOfwheels = noOfwheels;
  this.color = color;

Vehicle.call(this,brand,model,speed,fuelType);    

}
Object.setPrototypeOf(Car.prototype,Vehicle.prototype);

function Airplane(noOfwheels,color,fuelType,brand,model,speed){
    this.noOfwheels = noOfwheels;
    this.fuelType = fuelType;

 Airplane.prototype.takeOff = function(){
      console.log("the airplane is ready to takeOff");
 }
 Airplane.prototype.land = function(){
     console.log("be attention the plane is in landing mode !");
 }
 Airplane.prototype.destinationAlarm = function(){
     console.log(" please pay attention your destination will reach in 10min");
 }

Vehicle.call(this,color,model,speed,brand);
}

Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype);

let car1 = new Vehicle("farari","ve343",0,"petrol");
let car2 = new Car(6,"black","diesel","suzuki","SUV",0);
let indigo = new Airplane(5,"white","diesel","Indigo","TK453",0);

 indigo.accelerate();
 indigo.takeOff();