function ageAccess(age){age = Number(age);
    if (age>=18 && age< 65){
        console.log("Access granted")
    } else if (age < 18){
        console.log("Access denied. you are too young")
    } else if (age >65){
        console.log("Access denied . you are too old")
    } else{
        console.log("invalid age")
    }
}
ageAccess(20)
ageAccess(17)
ageAccess(" ")

