/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("/* TOGGLE MENU ANIMATION */\r\nconst toggler = document.querySelector(\".menu__toggler\")\r\nconst menu = document.querySelector(\".menu\")\r\nconst arrow = document.querySelector(\".arrow\")\r\n\r\ntoggler.addEventListener(\"click\", () => {\r\n  toggler.classList.toggle(\"active\")\r\n  menu.classList.toggle(\"active\")\r\n  arrow.classList.toggle(\"reverse\")\r\n})\r\n\r\n/* CLOCK current hour */\r\nfunction currentTime() {\r\n  let date = new Date()\r\n  let hh = date.getHours()\r\n  let mm = date.getMinutes()\r\n  let ss = date.getSeconds()\r\n  // let session = \"AM\"\r\n\r\n  // if (hh > 12) {\r\n  //   session = \"PM\"\r\n  // } NON LI VOGLIO ma forse domani si\r\n\r\n  hh = hh < 10 ? \"0\" + hh : hh\r\n  mm = mm < 10 ? \"0\" + mm : mm\r\n  ss = ss < 10 ? \"0\" + ss : ss\r\n\r\n  let time = hh + \":\" + mm + \":\" + ss\r\n\r\n  document.getElementById(\"clock\").innerText = time\r\n  let t = setTimeout(function () {\r\n    currentTime()\r\n  }, 1000)\r\n}\r\n\r\ncurrentTime()\r\n\r\n/* CURRENT DAY */\r\nlet today = new Date()\r\ntoday =\r\n  today.getFullYear() +\r\n  \" \" +\r\n  today.toLocaleString(\"en-US\", { month: \"long\" }) +\r\n  \" \" +\r\n  today.getDate()\r\ndocument.getElementById(\"day\").innerText = today\r\nconsole.log(today)\r\n\r\n/* drag and drop */\r\n\n\n//# sourceURL=webpack://portfolio/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;