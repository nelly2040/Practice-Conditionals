function flightBooking(age,hasPassport,isFlightAvailable){
    if(age>= 18 && age <= 70 && hasPassport && isFlightAvailable){
        return"booking successful";
     } else {
        return "booking failed" ;
    }
}
console.log(flightBooking(20,true,true))
console.log(flightBooking(40,false,true))
console.log(flightBooking(40,false,true))