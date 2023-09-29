
// This will print line by line 
// Expected out put
// 1
// 2
// 3
// 4
// 5
function printingLine(){
    console.log("1")
    console.log("2")
    console.log("3")
    console.log("4")
    console.log("5")
}

// This function is async code 
// Expected output
// this will print after 1 sec(3rd-defined)
// this will print after 2 sec(2nd-defined)
// this will print after 5 sec(4th-defined)
// this will print after 10 sec(1st-defined)
const printOut = () => {
    setTimeout(()=>{
        // Printing after 10 seconds
        console.log("this will print after 10 sec(1st-defined)")
    },15000)
    setTimeout(()=>{
        // Printing after 2 seconds
        console.log("this will print after 2 sec(2nd-defined)")
    },2000)
    setTimeout(()=>{
        // Printing after 1 second
        console.log("this will print after 1 sec(3rd-defined)")
    },1000)
    setTimeout(()=>{
        // Printing after 5 seconds
        console.log("this will print after 5 sec(4th-defined)")
    },5000)
}


// This will execute last even though it is called in the first place beacuase of asynchronous nature
printOut();

// This will execute first // it doesn't have any async nature
printingLine();