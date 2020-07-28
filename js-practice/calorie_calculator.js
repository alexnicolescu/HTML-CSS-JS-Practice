var calories = { 'monday': 3500, "tuesday": 2000, "wednesday": 4000, "thursday": 4200, "friday": 1500, "saturday": 1000, "sunday": 5000 }
function inputCaloriesByDay(day) {
    return calories[day];
}

function getTotalCalories() {
    return calories['monday'] + calories['tuesday'] + calories['wednesday'] + calories['thursday'] + calories['friday'] + calories['saturday'] + calories['sunday'];
}

function getIdealCalories() {
    var idealDailyCalories = 2000;
    return idealDailyCalories * 7;
}

function calculateHealthPlan() {
    var actualCalories = getTotalCalories();
    var idealCalories = getIdealCalories();
    if(actualCalories === idealCalories)
        return "You ate just the right amount of food!";
    else if(actualCalories > idealCalories)
        return "Time to head to the gym!";
    else
        return "Time for seconds!";
}

console.log(calculateHealthPlan());