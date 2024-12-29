class SuperHero{
    name='Akshay SuperHero ';
    roll_no=95
    constructor(location){
        console.log(`this is location constructor`)
        this.location=location
    }
    getLocationName(){
        console.log(`getLocation Method h1 in Scope {}`)

        return this.location
    }
}

const h1= new SuperHero('Pune');
console.log(h1.getLocationName())
// console.log(h1.name)

class NewSuperHero extends SuperHero{
    constructor(location){
        super (location)
    }

    getExtendedLocation(){
        return ` the extended location is: ${this.location}`
    }
    

}

const h2= new NewSuperHero("Delhi")

console.log('extended class',h2.getExtendedLocation())
