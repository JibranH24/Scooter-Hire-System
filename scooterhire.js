"use strict"
const nanoid = require('nanoid')

class User {
    userId;
    age;
    constructor(age){
        this.userId = nanoid.nanoid()
        this.age = age
    }
    login(person){
        if(person instanceof Customer && person.age>=18){
            console.log("You have logged in")
            App.users.push(person)

        } 
        else if(person instanceof RepairMan && person.age>=18){
            console.log("You have logged in")
            App.users.push(person)
        }
        else{ throw new TypeError("ERROR user must be 18+")}
    }
}

class Customer extends User{
     bankBalance;
     possessedScooter;
     constructor(age, bankBalance){
         super(age)
         this.bankBalance = bankBalance
     }
     rentScooter(Scooter){
        //  let chosenScooter = ChargingDock.availableScooters.indexOf(Scooter)
        //  this.possessedScooter.push(canaryWharfChargingDock.availableScooters.splice(chosenScooter,1))
            this.possessedScooter = Scooter
     }
     returnScooter(){
         
     }
     reportBroken(){}

         
     
 }

class RepairMan extends User{
      staffNo;  
    constructor(staffNo, age){
        super(age)
        this.staffNo=staffNo
    }
    repairScooter(){}

 }

class App{
     static users = []
     appName;
     constructor(appName){
         this.appName= appName
     }
 }

class ChargingDock{
    chargingScooters= []
    availableScooters = []
    brokenScooters = []
    locations;
    constructor(locations){
        this.locations = locations
    }
    getScooter(){
        
        if(this.availableScooters.length == 0){
            console.log("No more scooters available")
        }return this.availableScooters.pop()
    }
}

class Scooter{
    scooterID;
    maxRangeinKg = 32
    constructor(scooterID){
        this.scooterID=scooterID
    }
}


let scooterHireApp = new App("Scooter Hire App") // App created

let canaryWharfChargingDock = new ChargingDock("Canary Wharf")  // Builds Charging dock

let scooter1 = new Scooter("Scooter1")                          // Creates scooters and makes them available
canaryWharfChargingDock.availableScooters.push(scooter1)

let scooter2 = new Scooter("Scooter2")
canaryWharfChargingDock.availableScooters.push(scooter2)

let scooter3 = new Scooter("Scooter3")
canaryWharfChargingDock.availableScooters.push(scooter3)

let scooter4 = new Scooter("Scooter4")
canaryWharfChargingDock.availableScooters.push(scooter4)

let scooter5 = new Scooter("Scooter5")
canaryWharfChargingDock.availableScooters.push(scooter5)

let scooter6 = new Scooter("Scooter6")
canaryWharfChargingDock.availableScooters.push(scooter6)

let scooter7 = new Scooter("Scooter7")
canaryWharfChargingDock.availableScooters.push(scooter7)

//console.log(canaryWharfChargingDock.availableScooters)

let harry = new Customer(19);
//harry.login(harry)

harry.rentScooter(canaryWharfChargingDock.getScooter())
console.log(harry.possessedScooter)
console.log(canaryWharfChargingDock.availableScooters)
harry.login(harry)
module.exports = {User, Customer, RepairMan, App, ChargingDock, Scooter}