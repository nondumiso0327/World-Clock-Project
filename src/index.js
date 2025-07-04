let saElement = document.querySelector(".south-africa");
let saDateElement = saElement.querySelector(".date");
let saTimeElement = saElement.querySelector(".time");
saDateElement.innerHTML =  moment().format("MMMM Do YYYY");
saTimeElement.innerHTML = moment().format("h:mm:ss A");