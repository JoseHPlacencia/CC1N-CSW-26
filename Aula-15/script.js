document.writeln("Hello world!");

window.alert("Hello world again!");

document.getElementById("title").innerHTML = "Hello world, i like JavaScript!"

let namePrompt = window.prompt("what your name?")


document.getElementById("name").innerHTML = namePrompt

let resp = window.confirm("Do you like JavaScript?")

if (resp) {
    document.getElementById("resposta").innerHTML = "Yes! The student is enjoying JavaScript class"
}
else {
    document.getElementById("resposta").innerHTML = "No! The student doesn't like JavaScript class"
}

function sendName() {
    let nameAnswer = document.getElementById("inputName").value

    const answer = document.getElementById("containerAnswer")

    document.getElementById("containerAnswer").innerHTML = "The name write is " + nameAnswer;

    document.getElementById("containerAnswer").style.display = "flex"
    document.getElementById("containerAnswer").style.height = "150px"
    document.getElementById("containerAnswer").style.backgroundImage = "linear-gradient(to right, red, orange, yellow, green, indigo, violet)"
    document.getElementById("containerAnswer").style.justifyContent = "center"
    document.getElementById("containerAnswer").style.alignItems = "center"
    document.getElementById("containerAnswer").style.fontSize = "20px"
    document.getElementById("containerAnswer").style.border = "2px solid #ff0000"
}