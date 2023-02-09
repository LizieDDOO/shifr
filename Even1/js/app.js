// const a = 2;
// console.log(a + Boolean(a) + String(a));

// const Foo = function (name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.getIsAdult = () => (this.age >= 18 ? true : false);
// };

// const a = new Foo("Alex", 12);
// a;
// a.age = 19;
// a;
// console.log(a.getIsAdult());

// window.addEventListener("contextmenu", (e) => {
// 	e.preventDefault();
// });

// document.querySelector("button").addEventListener("click", (e) => {
// 	e.preventDefault();
// });
// window.addEventListener("DOMContentLoaded", (e) => {
// 	e.preventDefault();
// });

// document.querySelector(".text").style = "red";

// document.querySelector(".text").className += " 34";
// document.querySelector(".text").classList.remove("text");
// const result = document.querySelector(".text").classList.toggle("huy");

// document.querySelector(".parent").addEventListener("click", () => {
// 	console.log("Hello");
// });

// document.querySelector(".child").addEventListener("click", (e) => {
// 	e.stopPropagation();
// });

// Курсор из кружка движется за вами



// Шифр Цезаря
// Модальное окно (stopPropagation())
// Клавиатура
//READ COMMENTS TO UNDERSTAND THE TECHNIQUE

(function () {

	"use strict";


	window.CeasarsCipher = function (input) {

		var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase(),
			shiftAmount,
			shiftedAlphabet = "",
			OUTPUT = "",
			STRING,
			otherCharacters = '-=~\"\'#$%&*^:<>?/!{(|)}.1234567890\, '
		if (typeof input === "object") {
			shiftAmount = input.shift;
			STRING = input.msg.toLowerCase();
		} else {
			return;
		}
		if (typeof STRING === "string" || typeof (STRING + "") === "string") {
			shiftedAlphabet = alphabet.slice(shiftAmount);
			shiftedAlphabet += alphabet.slice(0, shiftAmount);
			shiftedAlphabet += otherCharacters;
			alphabet += otherCharacters;

			for (var i = 0; i < STRING.length; i++) {
				var numberd = alphabet.indexOf(STRING[i])
				OUTPUT += shiftedAlphabet[numberd];
			}
		} else {
			return;
		};

		return OUTPUT;
	};
})();
document.getElementById("message").addEventListener("input", function () {
	var itsValue = this.value;
	document.getElementById("output").textContent = CeasarsCipher({
		msg: itsValue,
		shift: document.getElementById("shift").value
	});
});
document.getElementById("shift").addEventListener("keyup", function () {
	var itsValue = this.value;
	document.getElementById("output").textContent = CeasarsCipher({
		msg: document.getElementById("message").value,
		shift: itsValue
	})
});

document.getElementById("output").textContent = CeasarsCipher({
	msg: document.getElementById("message").value,
	shift: document.getElementById("shift").value
});