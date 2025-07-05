//south africa
function updateSaClock() {
  let saElement = document.querySelector(".south-africa");
  let saDateElement = saElement.querySelector(".date");
  let saTimeElement = saElement.querySelector(".time");
  let saTime = moment().tz("Africa/Johannesburg");
  saDateElement.innerHTML = saTime.format("MMMM Do YYYY");
  saTimeElement.innerHTML = `${saTime.format("h:mm:ss  [<small>]A[</small>]")}`;
}
updateSaClock();
setInterval(updateSaClock, 1000);

//Tokyo
function updateTokyoClock() {
  let tokyoElement = document.querySelector(".tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    "h:mm:ss  [<small>]A[</small>]"
  )}`;
}
updateTokyoClock();
setInterval(updateTokyoClock, 1000);
