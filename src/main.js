/* toggle menu */
const toggler = document.querySelector(".menu__toggler")
const menu = document.querySelector(".menu")
const arrow = document.querySelector(".arrow")

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active")
  menu.classList.toggle("active")
  arrow.classList.toggle("reverse")
})
