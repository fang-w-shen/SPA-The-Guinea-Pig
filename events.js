var articles = document.getElementsByClassName('article-section');
var output = document.getElementById('output-target');
for(i=0;i<articles.length;i++) {
    articles[i].addEventListener("click",function(){
        output.innerHTML = "You clicked on the " + this.innerHTML + " section";
    });
}

//=========================//
var h1 = document.getElementById("page-title");

h1.addEventListener("mouseover", function() {
	output.innerHTML = "You moved your mouse over the header";
});

h1.addEventListener("mouseout", function() {
	output.innerHTML = "You left me!";
});

//=========================//
var keyinput = document.getElementById("keypress-input");

keyinput.addEventListener("keyup", function() {
	output.innerHTML = this.value;

})

//=========================//
var add = document.getElementById("add-color");

add.addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.add("blue");
})


var hulk = document.getElementById("make-large");

hulk.addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.add("big");
})

var border = document.getElementById("add-border");

border.addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.add("border");
})

var round = document.getElementById("add-rounding");

round.addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.add("round");
})

