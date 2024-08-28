const genbutton = document.getElementById("generate");
const outputdiv = document.getElementById("output");

genbutton.addEventListener("click", generate);

function generate() {
    const randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    const randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];

    const output = randomPrefix + " " + randomSuffix;

    outputdiv.innerText = output;
}
