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

const arrowRight = document.querySelector("#banner .arrow_right")
const arrowLeft = document.querySelector("#banner .arrow_left")
console.log()

arrowRight.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton droit")
});

arrowLeft.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton gauche")
});


// Partie Ajout des bullet points au slider

const bulletDiv = document.querySelector("#banner .dots")

for (let i = 0; i < slides.length; i++) {
	const bullet = document.createElement("span")
	bulletDiv.appendChild(bullet)
	bullet.classList.add("dot")
    bullet.classList.add(`dot${i}`); // Ajout de classes dot1, dot2, dot3, ...
	// Ajout de la classe dot_selected au premier élément de la liste
    if (i === 0) {
        bullet.classList.add("dot_selected");
    }
	console.log(bullet)
}