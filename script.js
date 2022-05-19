function load(sizeX, sizeY) {
	let posArray = []
	for (i=0;i<sizeX;i++) {
		let i20 = i * 20
		let posAdd = `.c${i} {left: ${i20}px}`
		posArray.push(posAdd)
	}
	for (i=0;i<sizeY;i++) {
		let i20 = i * 20
		let posAdd = `.l${i} {top: ${i20}px}`
		posArray.push(posAdd)
	}
	document.getElementById("positions").innerHTML = posArray.join(" ")
	for (i=0;i<sizeX;i++) {
		for (j=0;j<sizeY;j++) {
		let pixel = document.createElement("div")
		pixel.classList.add("pixel", "off")
		pixel.classList.add(`c${i}`, `l${j}`)
		pixel.id = `c${i}l${j}`
		pixel.setAttribute("onClick", `colorSwap(${i}, ${j})`)
		document.getElementById("field").appendChild(pixel)
		}
	}
}

function colorSwap(x, y) {
	let pixel = document.getElementById(`c${x}l${y}`)
	if (pixel.classList.contains("off")) {
		pixel.classList.replace("off", "on")
	} else if (pixel.classList.contains("on")) {
		pixel.classList.replace("on", "off")
	}
}

setTimeout(Function("load(72, 36)"), 3)