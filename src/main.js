import AOS from "aos"
import "../node_modules/aos/dist/aos"
// AOS.init()

AOS.init({
  delay: 100,
  duration: 600,
  once: false,
})

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

/* baigBubble animation */

let bigBubble = document.querySelector("#bigbubble")

bigBubble.addEventListener("input", (e) => {
  let newSize = scaleValue(e.target.value, [0, 100], [100, 250])
  document.documentElement.style.setProperty("--ballSize", `${newSize}px`)
})

function scaleValue(value, from, to) {
  var scale = (to[1] - to[0]) / (from[1] - from[0])
  var capped = Math.min(from[1], Math.max(from[0], value)) - from[0]
  return ~~(capped * scale + to[0])
}

/* marquee */ const configs = {
  duration: 30,
  ease: "none",
}

const lines = {
  first: {
    direction: "right",
    element: document.querySelector("#marquee-first-line"),
  },
  second: {
    direction: "left",
    element: document.querySelector("#marquee-second-line"),
  },
  third: {
    direction: "right",
    element: document.querySelector("#marquee-third-line"),
  },
}

let timeline = gsap.timeline()
let sentenceWidth = document.querySelector(".marquee__sentence").clientWidth

// Init timeline and register events.
function init() {
  setTimeline()
  const marqueeImage = document.querySelector("#maquee-image")
  marqueeImage.addEventListener("mouseenter", flipDirection)
  marqueeImage.addEventListener("mouseout", flipDirection)
  window.addEventListener("resize", handleResize)
}

// Add marquee animations to timeline.
function setTimeline() {
  timeline
    .add(createMarquee(lines.first.element, lines.first.direction), 0)
    .add(createMarquee(lines.second.element, lines.second.direction), 0)
    .add(createMarquee(lines.third.element, lines.third.direction), 0)
}

// Create single marquee animation.
function createMarquee(element, direction) {
  const distance = sentenceWidth * 2
  return gsap.timeline().to(element, {
    ...configs,
    x: direction === "left" ? distance : -distance,
    onComplete() {
      timeline.play(0)
    },
    onReverseComplete() {
      timeline.reverse(0)
    },
  })
}

// Reverse the timeline direction.
function flipDirection() {
  timeline.reversed(!timeline.reversed())
}

// Reset timeline on resize.
function handleResize() {
  sentenceWidth = document.querySelector(".marquee__sentence").clientWidth
  timeline.seek(0)
  timeline.clear()
  setTimeline()
}

init()
