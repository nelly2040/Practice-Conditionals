let age = prompt("How old are you?")
myAge = Number(age);
if (myAge>=18 && myAge< 65){
    console.log("Access granted")
} else if (myAge < 18){
    console.log("Access denied. you are too young")
} else if (myAge >65){
    console.log("Access denied . you are too old")
} else{
    console.log("invalid age")
}