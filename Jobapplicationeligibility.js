function checkEligibility(age,yearsExperience,knowsJavaScript){
    if (age>25 && age<50 && yearsExperience>5 || (age <30 && yearsExperience>=3) && knowsJavaScript){
        return "Eligible for the job";
    }else {
        return "Not Eligible"
    }
}
console.log (checkEligibility(28,6,true))
console.log (checkEligibility(24,4,true))
console.log (checkEligibility(55,2,false))
console.log (checkEligibility(28,6,true))