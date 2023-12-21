const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let number = 0

// Ajout des bullet points au slider

const bulletDiv = document.querySelector("#banner .dots")

for (let i = 0; i < slides.length; i++) {
	const bullet = document.createElement("span")
	bulletDiv.appendChild(bullet)
	bullet.classList.add("dot")
	// Ajout de la classe dot_selected au premier élément de la liste
    if (i === number) {
        bullet.classList.add("dot_selected");
    }
	console.log(bullet)
}

// Flèches de défilement du carousel 
const arrowRight = document.querySelector("#banner .arrow_right")
arrowRight.addEventListener("click", () => {
	moveSlide(1);
	updateSelectedDot()
});

const arrowLeft = document.querySelector("#banner .arrow_left")
arrowLeft.addEventListener("click", () => {
	moveSlide(-1);
	updateSelectedDot()
});

// Fonction permettant de faire défiler le carousel
function moveSlide(sens) {
	number = number + sens;
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[number] ["image"]; 
	document.querySelector("#banner p").innerHTML = slides[number] ["tagLine"];
}

// Fonction permettant de faire défiler les points bullet 
function updateSelectedDot() {
    const dots = document.querySelectorAll("#banner .dots .dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot_selected");
        if (i === number) {
            dots[i].classList.add("dot_selected");
        }
    }
}


