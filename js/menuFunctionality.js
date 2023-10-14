$("#contactsClearBtn").click(function() {
	const inputs = document.getElementById("contactsForm").getElementsByClassName("input");

	for (i = 0; i < inputs.length; ++i) {
		inputs[i].value = '';
	}
})

$("#portfolio").click(function() {
	const main = document.getElementById("mainBlock");
	const portfolio = document.getElementById("portfolioBlock");

	main.classList.toggle("translateY100");
	portfolio.classList.toggle("translateY0");

	this.parentNode.classList.toggle("menu-portfolio");
})

$("#contactsForm").submit(function() {
	const inputs = document.getElementById("contactsForm").getElementsByClassName("input");

	for (let i = 0; i < inputs.length; ++i) {
		inputs[i].value = ""
	}
});