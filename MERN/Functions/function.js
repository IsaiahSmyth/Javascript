const add2 = (a,b)=> {
    console.log(a+b)
    return a+b
}

const myFunc = add2

console.log(myFunc(2,2))

const caller = (otherFunc) => {

    console.log(otherFunc)

    console.log("calling the function")

    console.log(otherFunc(2,3))
}

const printSomething = () => {
    console.log(`Hello from the past! I say ${x}`)
}


setTimeout(()=>{printSomething("yeeaaaah!") }   , 1500)

caller(add2)




const guitars = [
    { make : "Gibson", model: "Les Paul"},
    {make : "Fender", model: "Stratpcaster"},
    {make: "Fender", model: "P-Bass"}

]

Object.freeze(guitars)

const allGuitars = otherGuitars.concat(guitars)

Object.freeze(allGuitars)

console.log(allGuitars.slice(2,4))

const guitarNames = ["Les paul", "Stratocaster", "P-Bass", "Telecaster", "Banjo"]

const numbers = [33, 10, 12, 4, 2, 44, 9]

console.log(numbers.map((number => number+2))).sort((a,b)=>a>b?1 : -1).filter((number)=> number % 2 == 0)


