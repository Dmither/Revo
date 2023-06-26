document.body.addEventListener("scroll", function () {
	if (document.body.scrollTop > 50)
		document.body.classList.add("scrolled");
	else document.body.classList.remove("scrolled");
});

document
	.querySelector(".header__logo")
	.addEventListener("click", function () {
		document.body.scrollTop = 0;
	});

document
	.querySelector(".header__cart")
	.addEventListener("click", function () {
		console.log("Cart click");
	});
