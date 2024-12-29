class SuperHero{
    constructor(location){
        console.log(`this is location constructor`)
        this.location=location
    }
    getLocationName(){
        console.log(`getLocation Method in Scope {}`)

        return this.location
    }
}

const h1= new SuperHero('Pune');
console.log(h1.getLocationName())