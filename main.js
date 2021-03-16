// level of abstraction
console.log(100 / 7)

let result
console.log(result)
result = 6 - (100 / 7) + 5
console.log(result)

let x;
let y;
y = 5;
x = undefined;
y = Math.PI;

console.log(x);
console.log(y);

let isLoggedIn = false
let isActive = false
const day = new Date().getDay()

let isSubscriber = isLoggedIn && isActive
let hasCancelledPlan = isLoggedIn && !isActive
let isWeekend = day === 0 || day === 6
let isTuesday = day === 2

if (isSubscriber) {
    console.log("The logged-in user has an active subscription.")
} else if (hasCancelledPlan) {
    console.log("The logged-in user does not have an active subscription.")
} else if (isTuesday) {
    console.log("Please log in. It's Tuesday already. Were you out yesterday?")
} else if (isWeekend) {
    console.log("Logging in on the weekend? Don't forget to give yourself a break!")
} else {
    console.log("Please log in.")
}
