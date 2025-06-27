const age = 'j'
function ageDeifine(age) {
    try {
        console.log(gjhg)
        if (isNaN(age)) {
            throw "plsea enter a number"
        } else if (age > 60) {
            throw "murubbi not allow"
        }
    } catch (error) {
        console.log("error khaisi re", error)
    }finally{
        console.log("\n   error khak ar nai khak finally execute hobei\n")
    }
    console.log(10 / 0)
}
ageDeifine(age)
