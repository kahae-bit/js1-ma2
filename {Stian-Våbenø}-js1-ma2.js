// question 1
function myFunctionExpression = function() {
	console.log("stian");
};

// question 2

<input type="button" class="btn" onclick="respondToClick()" value="Click me"></input>

function respondToClick() {
    console.log("I was clicked");
};

button.addEventListener("click", respondToClick);

// question 3



// question 4

<button class="btn" data-animal="dog">Hover over me</button>

function hover() {
    console.log("Hover over me");
    };

button.addEventListener("mouseover", hover);

// question 5

<button class="btn" data-animal="dog">Hover over me</button>

function hover() {
    console.log("Hover over me");
    };

button.addEventListener("mouseout", hover);

// question 6



// question 7

const animal = "cow";

if(animal === "cat") {
    console.log("Meow");
}
else if(animal === "cow") {
    console.log("Moo");
}
else if(animal === "bird") {
    console.log("Tweet");
}
else {
    console.log("Harrumph");
}

switch (animal) {
    case "cow":
        console.log("Moo");
        break;

    case "bird":
        console.log("Tweet");
        break;

    default:
        console.log = [];
}

// question 8

const sheep = ["Malcolm", "Anders", "Marie"];

for(let i = 0; i < sheep.length; i++) {
    console.log(sheep[i]);
}

sheep.forEach(function(sheep) {
    console.log(sheep);
});

// question 9

function hello() {

    console.log("hello");

    if(counter === 5) {
        clearInterval(intervalId);
    }

    counter++;

}

let counter = 0;

const intervalId = setInterval(hello, 500);

// question 10

<div class="container">Placeholder text</div>

function updateDiv() {
    counterContainer.innerHTML = counter;
    counter++;
}

let counter = 1;

const intervalId = setInterval(logTime, 2000);
