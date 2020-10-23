class Battery{
    constructor(energy) {
        this.energy = energy;
    }
    getEnergy(){
        return this.energy;
    }
    setEnergy(energy){
        this.energy = energy;
    }
    decreaseEnergy(){
        this.energy -= 10;
    }
}