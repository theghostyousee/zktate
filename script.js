var x = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function generateMixed(n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    let id = Math.floor(Math.random() * 366); // generate a random number between 0 and 365 (inclusive)
    res += id.toString();
  }
  return res;
}

function clickonbody() {
  var texts = "Escape the matrix with @zk_tate 🚨.%0a%0a";

  var jail = "You've been sentenced to";
  var randomn = " " + generateMixed(1);
  var text = " days in Romanian Jail⛓️ ";
  window.location.href =
    "https://twitter.com/intent/tweet?&text=\n" + texts + jail + randomn + text;
}

window.onload = function () {
  document.getElementsByName("button").addEventListener("click", doThing);
  function doThing() {
    clickonbody();
  }
};
