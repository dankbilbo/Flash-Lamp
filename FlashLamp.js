class FlashLamp{
    constructor(status, battery) {
        this.battery = battery;
        this.status = status;
    }
    light(){
        if(this.status == true){
            if(this.battery.getEnergy() <= 0){
                return alert("out of battery");
            }
            alert("LIGHT ON");
        }else{
            if(this.battery.getEnergy() <= 0){
                return;
            }
            alert("LIGHT OFF");
        }
    }
    turnOn(){
        this.status = true;
        this.battery.decreaseEnergy();
        this.light();
    }
    turnOff(){
        this.status = false;
        this.light();
    }
    getBatteryInfo(){
        if(this.battery.getEnergy() <= 0){
            return 0;
        }
        return this.battery.getEnergy();
    }
    setBattery(battery){
        this.battery = battery
    }
}
let fl = new FlashLamp();
let b1 = new Battery();
b1.setEnergy(100);
fl.setBattery(b1);
function on(){
    fl.turnOn();
    document.getElementById("batterInfo").innerHTML = fl.getBatteryInfo();
}

