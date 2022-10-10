let who = ["The bus", "My grandma", "His dog", " My bird", "The neighbor", "I"];
let what = ["ate", "pissed", "slapped", "broke", "popped", "passed away"];
let when = [
  "before the class.",
  "right in time.",
  "when I finished.",
  "during lunch.",
  "while I was praying.",
  "when i was on my way",
  "before i leaved my home"
];

function getRandom(range) {
  return Math.floor(Math.random() * range);
}

function createExcuse() {
  var s =
    who[getRandom(6)] +
    " " +
    what[getRandom(6)] +
    " my ride " +
    when[getRandom(7)];
  document.getElementById("excuse").innerHTML = s;
}
