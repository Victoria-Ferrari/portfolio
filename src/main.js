/* TOGGLE MENU ANIMATION */
const toggler = document.querySelector(".menu__toggler")
const menu = document.querySelector(".menu")
const arrow = document.querySelector(".arrow")

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active")
  menu.classList.toggle("active")
  arrow.classList.toggle("reverse")
})

/* CLOCK current hour */
function currentTime() {
  let date = new Date()
  let hh = date.getHours()
  let mm = date.getMinutes()
  let ss = date.getSeconds()
  // let session = "AM"

  // if (hh > 12) {
  //   session = "PM"
  // } NON LI VOGLIO ma forse domani si

  hh = hh < 10 ? "0" + hh : hh
  mm = mm < 10 ? "0" + mm : mm
  ss = ss < 10 ? "0" + ss : ss

  let time = hh + ":" + mm + ":" + ss

  document.getElementById("clock").innerText = time
  let t = setTimeout(function () {
    currentTime()
  }, 1000)
}

currentTime()

/* CURRENT DAY */
let today = new Date()
today =
  today.getFullYear() +
  " " +
  today.toLocaleString("en-US", { month: "long" }) +
  " " +
  today.getDate()
document.getElementById("day").innerText = today
console.log(today)

/* drag and drop */
