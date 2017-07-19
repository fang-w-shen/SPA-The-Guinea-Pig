var articles = document.getElementsByClassName('article-section');
var output = document.getElementById('output-target');


for(i=0;i<articles.length;i++) {
    articles[i].addEventListener("click",function(){
        output.innerHTML = "You clicked on the " + this.innerHTML + " section";
    });
}

var h1 = document.getElementById("page-title");

h1.addEventListener("mouseover", function() {
	output.innerHTML = "You moved your mouse over the header";

});

h1.addEventListener("mouseout", function() {
	output.innerHTML = "You left me!";

});

var keyinput = document.getElementById("keypress-input");

keyinput.addEventListener("keyup", function() {
	output.innerHTML = this.value;

})

var add = document.getElementById("add-color");
