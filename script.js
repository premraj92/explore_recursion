// Recursion

// A kind of paradigm/alogorithm that takes a very complex problem & breaks it into its smallest component parts OR to be more precise the FINAL SOLUTION is DERIVED from a LOT of SMALLER repetitive/Iterative solutions

// Its similar to a loop in the sense that here also the same block of code is executed repeatedly - i.e. a function calling itself repeatedly from inside its own function definition . . ,usually with different inputs/arguments for each recursive function call UNTIL a FAIL SAFE Condition is TRIGGERED

// So to sum it up - RECURSION is a pattern in which 
// A Function that calls itself within its own function body/definition
    // It has two main parts/identifying characterstics
     // 1. The Recusrive function call itself
     // 2. a BASE CASE - which is the fail safe(a condition) which if triggered/satisfied will stop the recursive function call
    // If this BASE CASE is ABSENT or IT's NEVER SATISFIED than the function behaves like an Infinite loop that never stops until our Browser or other RunTimes throws an StackOveflowed Error after we exceed the maximum number of function calls that can be stored/tracked by our CALL STACK or even in languages other than Javascript once any similar Execution memory runs out


    // A couple of PSUEDO CODE EXAMPLES

// // A very basic piece of code to explain the syntax

// function findMySecret(originalArgument) {

//     // Base CASE - that ends/escapes the Recursive call below
//     if(secretFound) {
//         return 'Your Goal is Achieved'
//     }


//     // Actual recursive call - incase if the Base Case above is absent OR Not satisfied this will become an infinite stack of function calls 
//     findMySecret(aSlightlyDifferentArgument)
// }


// // // Lets imagine another scenario - Imagine inside a set of - Matryoshka dolls OR Nesting dolls where N number of similar dolls but where each subsequent inner doll decrease in size are placed within each other && in the inner most doll there is A PIECE of CHOCOLATE

// // Now to find this chocolate we don't know the `number of dolls` in the set, if we had that information we can use a loop
// // but here will use recursion

// function findChocolate(originalOrg) {
//     if(chocolateFound) {
//         return `Chocolate Found yum yum !!`
//     }

//     if(noMoreDolls && noChocolateInInnerMost) {
//         return ' All Dolls Checked but No Chocolate Found'
//     }

//     findChocolate(differentOrg)
// }













            // ACTUAL EXAMPLEs of Recursion
// Example One - a very classical example of Recusrion - i.e. find a Factorial of a Number
    // Factorial_of_4 = 4*3*2*1 = 24

    function findFactorial(number) {
        
        // Base Case
        if(number === 1 || number === 0) return 1

        return number * findFactorial(number - 1)
    }

    console.log(`Factorial of 0 is `,findFactorial(0))
    console.log(`Factorial of 1 is `,findFactorial(1))
    console.log(`Factorial of 2 is `,findFactorial(2))
    console.log(`Factorial of 4 is `,findFactorial(4))
    console.log(`Factorial of 5 is `,findFactorial(5))
    console.log(`Factorial of 10 is `,findFactorial(10))
    console.log(`Factorial of 20 is `,findFactorial(20))





// Example Two
    // Find the number/value at a particular index in the FiboNACCI Sequence
    // Fibonacci is a number sequence where each number in the sequence is the SUM of previous two number in the sequence
    // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34 . . .]
    // the first 2 values in the sequence is always 0, 1 - Is this assumption of first 2 values 100% accurate ?


    // Problem statement - An input index will be given & we have to find the Fibbonaci sequence value in that particular index


    // Without Recursion 
    function findFibbonacciByIndexWOR (index){

        const fibbSeries = [0, 1]

        for(let i=2; i <=index; i++) {
            fibbSeries.push(fibbSeries[i-1] + fibbSeries[i-2])
        }

        return fibbSeries
    }

    // Using Recursion
    function findFibbonacciByIndexWR(index) {

        if(index === 0) return 0
        if(index <= 1)  return 1

        return findFibbonacciByIndexWR(index - 1) + findFibbonacciByIndexWR(index - 2)

    }

    console.log(`%cFibbonacci values sequence calculated WITHOUT RECURSION but using loops`, 'color: blue')
    console.log(`Fibbonacci Value in index of 0 is `,findFibbonacciByIndexWOR(0))
    console.log(`Fibbonacci Value in index of 1 is `,findFibbonacciByIndexWOR(1))

    console.log(`Fibbonacci Value in index of 6 is `,findFibbonacciByIndexWOR(6))

    console.log(`Fibbonacci Value in index of 9 is `,findFibbonacciByIndexWOR(9))

    // console.log(`Fibbonacci Value in index of 2023 is `,findFibbonacciByIndex(202))


    console.log(`%cFibbonacci values sequence calculated WITH RECURSION`, 'color: yellow')
    console.log(`Fibbonacci Value in index of 0 is `,findFibbonacciByIndexWR(0))
    console.log(`Fibbonacci Value in index of 1 is `,findFibbonacciByIndexWR(1))

    console.log(`Fibbonacci Value in index of 6 is `,findFibbonacciByIndexWR(6))

    console.log(`Fibbonacci Value in index of 9 is `,findFibbonacciByIndexWR(9))
    





    // Example - 3
    // A Smiple Count Down - where all the values in a range `from a provided value down to the integer 1` is printed to the console . . . when you reach zero print `Hooray` in the console.
    

    // first with a iterative/looping solution
    function countDown(number) {
        for(let i=number; i >= 0 ; i--) {
            console.log(i)
        }

        return console.log(`Hooray !!`)
    }

    countDown(10)


    // a Recursive solution for the same problem as above

    function countDownRecursive(number) {
        // 1. base case
        if(number <= 0) return console.log(`Hooray Recursion !!`)
        
        // with the below debugger statement you can verify the callStack with all the recursive function calls till this point 
        // if(number === 1) debugger
        
        // 2. any other logic
        console.log(number)

        // 3. recusrive function call - with a slightly different argument
        countDownRecursive(number - 1)
    }

    countDownRecursive(10)
    countDownRecursive(15)
    countDownRecursive(100)









        // Example - 4
    // A Smiple SumFinder - where all the values in a range `from a provided value down to the integer 1` is summed up & the total of all values is printed to the console . .

    // Iterative soultion 
    function sumFinder (rangeEnd) {
        let sum = 0

        for(let i=rangeEnd; i > 0 ; i--) {
            sum += i
        }

        return sum
    }

    console.log(sumFinder(3))
    console.log(sumFinder(5))
    console.log(sumFinder(8))


    // Recusrive solution
    function sumFinderRecursive(rangeEnd=0, sum = 0) {
        
        // 1. base case
        if(rangeEnd <= 0) return sum

        // 2. other implementation logic
        sum += rangeEnd

        // if(rangeEnd === 1) debugger

        return sumFinderRecursive(rangeEnd - 1, sum)
    }

    console.log(sumFinderRecursive())
    console.log(sumFinderRecursive(1))
    console.log(sumFinderRecursive(5))









// Example - 5

// NOW ALL of the 4 EXAMPLES ABOVE are ones where - iterative/looping style makes Equal/More sense than Recursion both in terms of performance but also ease of use
// Now lets see a use case where solving this problem with a Iterative Solution is either EXCEEDINGLY DIFFICULT or IMPOSSIBLE

    // Traverse through a deeply nested Object tree & find a particular property in all that nested Object structure
    // In this specific case we have a Family Tree where we will find children from each nested Object that represents a Generation
    
    const familyTree = {
        name: 'John',
        children: [
            {
                name: 'Jack',
                children: []
            },

            {
                name: 'Zoe',
                children: [
                    {
                        name: 'Audrey',
                        children: []
                    },
                    {
                        name: 'Vannesa',
                        children: [
                            {
                                name: 'Rene',
                                children: [
                                    {
                                        name: 'Jane Doe',
                                        children: [
                                            {
                                                name: 'Mariyn Monroe',
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        name: 'John Doe',
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }


    // Recursive function implementation to traverse through above tree/object - familyTree
    // here the familyTree has 2 MAIN Properties at every nested levels 1. Name & 2. Children
    // here each Name can either be only a Child if they themselves don't have any children or they can be both a parent & children
    // the goal here is to Log Each Generation of children from the outermost/oldest available ancestor to the innermost/most recent child in the familyTree - instead of just logging the children you can also group together/Transform them in any way you want


    // function traverseTreeRecursively(tree) {

    //     // 1. Base case
    //     if(tree?.children?.length === 0) return

    //     tree.children.forEach(child => {

    //         // 2. other logic
    //         console.log(child.name)
            
    //         // 3. Recusrive Function call
    //         traverseTreeRecursively(child)
    //     })
    // }


    // same as above Function implementation - traverseTreeRecursively but with a slightly more context/bells&WHistles like generation number before each name & 4 extra spaces to identify the hierarchy clearly
    // i.e. we are priniting the same info as above function of same name but does so in a more readable manner that's it 
    function traverseTreeRecursively(tree, generation = 1) {

        // 1. Base case
        if(tree?.children?.length === 0) return

        tree.children.forEach(child => {

            // 2. other logic
            const childNameAndGen = `${generation}.${child.name}`
            // console.log(childNameAndGen)
            console.log(childNameAndGen.padStart(childNameAndGen.length + (generation * 4)  ,'    '))
            
            // 3. Recusrive Function call
            traverseTreeRecursively(child, generation + 1)
        })
    }

    traverseTreeRecursively(familyTree)










// Example - 6
// Flattening an Array of Arrays into a Single Array OR a Single String

const arrOfArrays = [1, 2, 3, 4, [11, 22, 33, 44, 55, [111, 222, 333] , 66 ] , 5, 6, 7, 8, 9, 10]

// Flattening to a single array
const flattenedArr = []
function flattenArrOfArraysRec(arr) {

    arr.forEach(item => {
        const isArray = Array.isArray(item)
        
        // base class
        if(!isArray) {
            flattenedArr.push(item)
        }

        // recursive function call
        if(isArray) {
            flattenArrOfArraysRec(item)
        }
    })
}
flattenArrOfArraysRec(arrOfArrays)
console.log(flattenedArr)


// Flattening to a String
let flattenedStrOutput = ''
function flattenArrToStr (arr) {

    arr.forEach(item => {
        const isArray = Array.isArray(item)
        
        // base class
        if(!isArray) {
            flattenedStrOutput += ` ${item}`
        }

        // recursive function call
        if(isArray) {
            flattenArrToStr(item)
        }
    })
}
flattenArrToStr(arrOfArrays)
console.log(flattenedStrOutput)










// Example - 7
// Iterate over nested Objects - i.e. How to Iterate over the Properties of an Object and its Children Objects
// This problem is similar to the above 2 examples of finding all the children from a FamilyTree && Flatenning an deeply nested array


let president = {
    firstName: "Franklin",
    lastName: "Roosevelt",
    email: "franklin.roosevelt@usprez.com",
    type: {
        type1: "President",
        type2: "Politician"
    },
    isActive: false,
    address: {
        doorNo: 111,
        street: {
            longtitude: '166.5deg N',
            lattitude: '88.7deg E'
        },
        county: "Hyde Park",
        city: "NewYork",
        country: "United States",
        zip: 10001
    }
}


// // Iterating over the above object using normal ways like - for-in-loop, Object.keys(), Object.values(), Object.entries()

// // with for-in-loop
// for(let key in president) {
//     // 1. logging keys that are direct/first-level children of president object
//     console.log(key, president[key])


//     // 2. another for-in-loop to loop over keys that have objects as values/2nd-level/nested objects
//     if(typeof president[key] === 'object') {
//         console.log(`%c @@@@ Looping through key values of inner/nested objects @ @ @ @`, {color: 'yellow'})
//         for (let prop in president[key]) {
//             console.log(prop, president[key][prop])
//         }

//     }
// }

//         // If you have further nested structures inside address or type object here you need another for-in loop nested here
//         // imagine 5 or 10 or even more levels of nesting so this solution with for-in loop becomes a nightmare like callback hell what is evenmore troublesome is that im most cases involving Dynamic data - YOU WON't EVEN KNOW HOW MANY NESTED LEVELS OF OBJECT is THERE in THE WHOLE TREE

// // using Object.keys(), Object.values(), Object.entries() & than using for-of or other helper methods to loop over them is an same as the above for of solution but with additional code to first convert the object to an Iterable form i.e. into an array




// So what is the solution as Always one of the most elegant solution/algorithm to Traverse through Tree/Graph data structures like Javascript Objects is RECURSION . . .

function iterateObjectTreeRecursive(tree) {

    for(let prop in tree) {
        if(typeof tree[prop] === 'object') {
            // 1. recursive function call
            // here tree[prop] is the curr nested object 
            iterateObjectTreeRecursive(tree[prop])
        }else {
            // this else statement acts as a base case
            console.log(prop, tree[prop])
        }
    }
}

iterateObjectTreeRecursive(president)