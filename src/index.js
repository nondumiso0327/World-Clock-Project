//south africa
function updateSaClock() {
  let saElement = document.querySelector("#south-africa");
  if (saElement) {
    let saDateElement = saElement.querySelector(".date");
    let saTimeElement = saElement.querySelector(".time");
    let saTime = moment().tz("Africa/Johannesburg");
    saDateElement.innerHTML = saTime.format("MMMM Do YYYY");
    saTimeElement.innerHTML = `${saTime.format("h:mm:ss  [<small>]A[</small>]")}`;
  }
}
  updateSaClock();
  setInterval(updateSaClock, 1000);

//Tokyo
function updateTokyoClock() {
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = `${tokyoTime.format(
      "h:mm:ss  [<small>]A[</small>]"
    )}`;
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let countriesElement = document.querySelector("#countries");
  
  countriesElement.innerHTML = `
    <div class="country">
      <div>
        <h2>${cityTimeZone.replace("_"," ").split("/")[1]}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        <div class="time">${cityTime.format("h:mm:ss  [<small>]A[</small>]")}</div>
      </div>
    </div>`;

}


updateTokyoClock();
setInterval(updateTokyoClock, 1000);


let countriesSelectElement = document.querySelector("#select");
countriesSelectElement.addEventListener("change", updateCity);